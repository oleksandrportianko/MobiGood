from rest_framework import serializers
from .models import Categories, Smartphone, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'first_name', 'last_name', 'father_name', 'phone']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


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