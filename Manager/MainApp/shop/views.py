from django.shortcuts import get_object_or_404, redirect

from .serializers import CartSerializer, LikedListSerializer, LikedProductSerializer

from .models import Cart, Product, CartProduct, LikedList, LikedProduct

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from ..views import get_user_with_jwt_from_cookies


class CartView(APIView):

    def get(self, request):
        user = get_user_with_jwt_from_cookies(request)
        cart, created = Cart.objects.get_or_create(
            owner=user,
            for_anonymous_user=False
        )
        cart_serializer = CartSerializer(cart)
        return Response(cart_serializer.data)


class AddToCartView(APIView):

    def post(self, request, *args, **kwargs):
        product_id = kwargs.get('product_id')
        product = Product.objects.filter(id=product_id).first()
        user = get_user_with_jwt_from_cookies(request)
        cart = Cart.objects.filter(owner=user, for_anonymous_user=False).first()
        cart_product = CartProduct.objects.get_or_create(
            user=user,
            product=product,
            cart=cart
        )

        cart.products.add(cart_product[0])
        cart.save()

        return Response({"detail": "Товар доданий в корзину", "added": True})


class ChangeQTYView(APIView):
    def post(self, *args, **kwargs):
        cart_product = get_object_or_404(CartProduct, id=kwargs['cart_product_id'])
        cart_product.qty = int(kwargs['qty'])
        cart_product.save()
        cart_product.cart.save()
        return Response(status=status.HTTP_200_OK)


class RemoveFromCartView(APIView):
    def post(self, request, *args, **kwargs):
        user = get_user_with_jwt_from_cookies(request)

        cart = Cart.objects.filter(owner=user, for_anonymous_user=False).first()
        cproduct = get_object_or_404(CartProduct, id=kwargs['cart_product_id'])
        cart.products.remove(cproduct)
        cproduct.delete()
        cart.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class LikedListView(APIView):

    def get(self, request):
        user = get_user_with_jwt_from_cookies(request)
        list, created = LikedList.objects.get_or_create(
            owner=user
        )
        liked_list_serializer = LikedListSerializer(list)
        return Response(liked_list_serializer.data)


class AddToLikedListView(APIView):

    def post(self, request, *args, **kwargs):
        product_id = kwargs.get('product_id')
        product = Product.objects.filter(id=product_id).first()
        user = get_user_with_jwt_from_cookies(request)
        list = LikedList.objects.filter(owner=user).first()
        liked_product = LikedProduct.objects.get_or_create(
            user=user,
            product=product, 
            likedlist=list
        )

        list.products.add(liked_product[0])
        list.save()

        return Response({"detail": "Товар доданий в обрані", "added": True})


class RemoveFromLikedListView(APIView):
    def post(self, request, *args, **kwargs):
        user = get_user_with_jwt_from_cookies(request)

        list = LikedList.objects.filter(owner=user, ).first()
        lproduct = get_object_or_404(LikedProduct, id=kwargs['liked_product_id'])
        list.products.remove(lproduct)
        lproduct.delete()
        list.save()
        return Response(status=status.HTTP_204_NO_CONTENT)