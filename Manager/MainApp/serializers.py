from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

from .models import Categories, Smartphone


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'first_name', 'last_name', 'email']

        extra_kwargs = {
            'password' : {
                'write_only' : True,
                'required' : True
            }
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['id', 'name', 'slug']


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