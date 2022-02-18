from rest_framework import viewsets

from .serializers import ProductSerializer, CustomCategorySerializer, SmartphoneSerializer
from .models import Product, Category, Smartphone

from .pagination import CategoryProductsPagination
from .utils import get_cart_and_products_in_cart

from rest_framework.views import APIView
from rest_framework.response import Response
import re


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


class SmartphoneViewSet(viewsets.ModelViewSet):
    queryset = Smartphone.objects.all()
    serializer_class = SmartphoneSerializer


class CustomSmartphoneViewSet(APIView):
    def get(self, *args, **kwargs):
        prod = Smartphone.objects.filter(id=kwargs['smartphone_id']).first()
        related_models = Smartphone.objects.filter(slug=prod.slug)
        related_models = str(related_models)
        related_models = re.sub("QuerySet ", "", related_models)
        related_models = re.sub("Smartphone:", "", related_models)
        related_models = related_models[1 : -1]
        related_models = related_models[1 : -1]
        print(related_models)
        prod.related_models = related_models
        prod.save()
        serializer = SmartphoneSerializer(prod)
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