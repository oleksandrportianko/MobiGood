from .models import User
from .serializers import UserSerializer, RegistationUserSerializer, ChangePasswordSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken
import jwt
from .jwt_settings import SIMPLE_JWT


def get_refresh_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return str(refresh)


def get_access_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return str(refresh.access_token)


def get_user_with_jwt_from_cookies(request):
    try:
        access_token = request.COOKIES.get('access')
        payload = jwt.decode(access_token, SIMPLE_JWT['SIGNING_KEY'], algorithms=[SIMPLE_JWT['ALGORITHM']], )
    except:
        try:
            refresh_token = request.COOKIES.get('refresh')

            payload = jwt.decode(refresh_token, SIMPLE_JWT['SIGNING_KEY'], algorithms=[SIMPLE_JWT['ALGORITHM']], )
            user = User.objects.filter(id=payload['user_id']).first()

            access_token = get_access_token_for_user(user)
            refresh_token = get_refresh_token_for_user(user)

            response = Response()
            response.set_cookie(key='access', value=access_token, httponly=True)
            response.set_cookie(key='refresh', value=refresh_token, httponly=True)
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User not authenticated!')

    user = User.objects.filter(id=payload['user_id']).first()
    return user


class RegisterView(APIView):
    def post(self, request):
        serializer = RegistationUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Wrong password!')

        access_token = get_access_token_for_user(user)
        refresh_token = get_refresh_token_for_user(user)

        response = Response()

        response.set_cookie(key='access', value=access_token, httponly=True)
        response.set_cookie(key='refresh', value=refresh_token, httponly=True)
        response.data = {
            'access': access_token,
            'refresh': refresh_token
        }
        return response


class UserView(APIView):

    def get(self, request):
        user = get_user_with_jwt_from_cookies(request)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class UpdateUserView(APIView):
    def put(self, request):
        user = get_user_with_jwt_from_cookies(request)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('access')
        response.delete_cookie('refresh')
        response.data = {
            'message': 'success'
        }
        return response


class ChangePasswordView(APIView):
    def post(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Неавтифіковано!')

        try:
            payload = jwt.decode(token, 'secret', algorithms='HS256')
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Неавтифіковано!')

        user = User.objects.get(id=payload['id'])
        serializer = ChangePasswordSerializer(data=request.data)

        if serializer.is_valid():
            if not user.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Не правильний пароль"]}, status=status.HTTP_400_BAD_REQUEST)
            user.set_password(serializer.data.get("new_password"))
            user.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
