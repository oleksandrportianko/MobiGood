from .serializers import UserSerializer, CategoriesSerializer, SmartphoneSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User

from .models import Categories, Smartphone


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

class SmartphoneViewSet(viewsets.ModelViewSet):
    queryset = Smartphone.objects.all()
    serializer_class = SmartphoneSerializer
