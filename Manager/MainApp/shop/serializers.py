from rest_framework import serializers

from .models import Product, Category, CartProduct, Cart, Smartphone, Order, LikedList, LikedProduct
from ..serializers import CustomUserSerializer


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class CustomCategorySerializer(CategorySerializer):

    products = serializers.SerializerMethodField()

    @staticmethod
    def get_products(obj):
        return ProductSerializer(Product.objects.filter(category=obj), many=True).data


class ProductSerializer(serializers.ModelSerializer):

    # category = CategorySerializer()

    class Meta:
        model = Product
        fields = '__all__'


class CustomProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'image', 'product_color', 'price']


class CartProductSerializer(serializers.ModelSerializer):

    product = CustomProductSerializer()

    class Meta:
        model = CartProduct
        fields = ['id', 'product', 'qty', 'final_price']


class CartSerializer(serializers.ModelSerializer):

    products = CartProductSerializer(many=True)
    owner = CustomUserSerializer()

    class Meta:
        model = Cart
        fields = '__all__'


class CustomCartSerializer(serializers.ModelSerializer):

    products = CartProductSerializer(many=True)

    class Meta:
        model = Cart
        fields = ['id', 'products', 'total_products', 'final_price']


class SmartphoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Smartphone
        fields = '__all__'


# class CustomSmartphoneSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Smartphone
#         fields = ['id', 'color']


class OrderSerializer(serializers.ModelSerializer):

    customer = CustomUserSerializer()
    cart = CustomCartSerializer()

    class Meta:
        model = Order
        fields = '__all__'


class OrderSerializerForCurrentUser(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ['cart', 'customer']


class CustomOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['address', 'comment']


class LikedProductSerializer(serializers.ModelSerializer):

    product = CustomProductSerializer()

    class Meta:
        model = LikedProduct
        fields = ['id', 'product']


class LikedListSerializer(serializers.ModelSerializer):

    products = LikedProductSerializer(many=True)

    class Meta:
        model = LikedList
        fields = '__all__'