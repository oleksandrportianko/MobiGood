from rest_framework import viewsets

from django.shortcuts import get_object_or_404

from .serializers import CartSerializer, ProductSerializer, CustomCategorySerializer, SmartphoneSerializer
from .models import Cart, Product, CartProduct, Category, Smartphone
from ..models import User
from .pagination import CategoryProductsPagination
from .utils import get_cart_and_products_in_cart

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt


class CartView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Неавтифіковано!')

        try:
            payload = jwt.decode(token, 'secret', algorithms='HS256')
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Неавтифіковано!')

        user = User.objects.filter(id=payload['id']).first()

        cart = self.get_cart(user)
        cart_serializer = CartSerializer(cart)
        return Response(cart_serializer.data)


class AddToCartView(APIView):

    def _get_or_create_cart_product(customer: User, cart: Cart, product: Product):
        cart_product, created = CartProduct.objects.get_or_create(
            user=customer,
            product=product,
            cart=cart
        )
        return cart_product, created

    def put(self, request):

        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Неавтифіковано!')

        try:
            payload = jwt.decode(token, 'secret', algorithms='HS256')
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Неавтифіковано!')

        user = User.objects.filter(id=payload['id']).first()

        cart = self.get_cart(user)
        product = get_object_or_404(Product, id=self.kwargs['id'])
        cart_product, created = self._get_or_create_cart_product(self.request.product, cart, product)
        if created:
            cart.products.add(cart_product)
            cart.save()
            return Response({"detail": "Товар доданий в корзину", "added": True})
        return Response({'detail': "Товар вже в корзині", "added": False}, status=status.HTTP_400_BAD_REQUEST)


class ChangeQTYView(APIView):
    def post(self, *args, **kwargs):
        cart_product = get_object_or_404(CartProduct, id=kwargs['cart_product_id'])
        cart_product.qty = int(kwargs['qty'])
        cart_product.save()
        cart_product.cart.save()
        return Response(status=status.HTTP_200_OK)


class RemoveFromCartView(APIView):
    def post(self, *args, **kwargs):
        cart = self.get_cart(self.request.user)
        cproduct = get_object_or_404(CartProduct, id=kwargs['cart_product_id'])
        cart.products.remove(cproduct)
        cproduct.delete()
        cart.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryViewSet(APIView):
    queryset = Category.objects
    serializer_class = CustomCategorySerializer
    permission_classes = []
    authentication_classes = []

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)


    def get(self, request, *args, **kwargs):
        self.pagination_class = CategoryProductsPagination
        products = Product.objects.filter(category=self.get_object())
        cart, products_in_cart = get_cart_and_products_in_cart(request)
        queryset = self.filter_queryset(products)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = ProductSerializer(page, many=True)
            for product in serializer.data:
                product['in_cart'] = True if product['id'] in products_in_cart else False
            return self.get_paginated_response(serializer.data)

        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)


# class ProductViewSet(APIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#
#     def list(self, request, *args, **kwargs):
#         queryset = self.filter_queryset(self.get_queryset())
#         cart, products_in_cart = get_cart_and_products_in_cart(request)
#         page = self.paginate_queryset(queryset)
#         if page is not None:
#             serializer = self.get_serializer(page, many=True)
#             serializer_data = serializer.data
#             if cart:
#                 for product in serializer_data:
#                     product['in_cart'] = True if product['id'] in products_in_cart else False
#             return self.get_paginated_response(serializer_data)
#
#         serializer = self.get_serializer(queryset, many=True)
#         serializer_data = serializer.data
#         if cart:
#             for product in serializer_data:
#                 product['in_cart'] = True if product['id'] in products_in_cart else False
#         return Response(serializer_data)
#
#     def retrieve(self, request, *args, **kwargs):
#         instance = self.get_object()
#         serializer = self.get_serializer(instance)
#         cart, products_in_cart = get_cart_and_products_in_cart(request)
#         serializer_data = serializer.data
#         if cart:
#             serializer_data['in_cart'] = False if instance.id not in products_in_cart else True
#         return Response(serializer_data)


class SmartphoneViewSet(viewsets.ModelViewSet):
    queryset = Smartphone.objects.all()
    serializer_class = SmartphoneSerializer