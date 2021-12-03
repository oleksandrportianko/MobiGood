from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'first_name', 'last_name', 'father_name', 'phone']
        extra_kwargs = {
            'password': {'write_only': True, "required": False},
            'email':{"required": False},
            'username':{"required": False},
            'first_name':{"required": False},
            'last_name':{"required": False},
            'father_name':{"required": False},
            'phone':{"required": False}

        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class ChangePasswordSerializer(serializers.Serializer):
    model = User
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
