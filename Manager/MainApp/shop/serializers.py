from rest_framework import serializers

from .models import Product, Category, CartProduct, Cart, Smartphone
from ..serializers import UserSerializer


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):

    # category = CategorySerializer()

    class Meta:
        model = Product
        fields = '__all__'


class CustomCategorySerializer(CategorySerializer):

    products = serializers.SerializerMethodField()

    @staticmethod
    def get_products(obj):
        return ProductSerializer(Product.objects.filter(category=obj), many=True).data


class CartProductSerializer(serializers.ModelSerializer):

    product = ProductSerializer()

    class Meta:
        model = CartProduct
        fields = ['id', 'product', 'qty', 'final_price']



# class CustomerSerializer(serializers.ModelSerializer):
#
#     user = serializers.SerializerMethodField()
#
#     class Meta:
#         model = Customer
#         fields = '__all__'
#
#     @staticmethod
#     def get_user(obj):
#         if not (obj.user.first_name and obj.user.last_name):
#             return obj.user.username
#         return ' '.join([obj.user.first_name, obj.user.last_name])


class CartSerializer(serializers.ModelSerializer):

    products = CartProductSerializer(many=True)
    owner = UserSerializer()

    class Meta:
        model = Cart
        fields = '__all__'


class SmartphoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Smartphone
        fields = ['id', 'category', 'title', 'slug', 'description', 'price',
                 'image1', 'color1',
                 'image2', 'color2',
                 'image3', 'color3',
                 'image4', 'color4',
                 'image5', 'color5',
                 'image6', 'color6',
                 'display', 'battery', 'memory', 'main_cam_mp',
                 'frontal_cam_mp', 'soc']
