from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import ShopProducts,ContactUs,Cart,UserProfile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['user', 'avatar']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
     model=ShopProducts
     fields ='__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
     model=ContactUs
     fields ='__all__'

class CartSerializer(serializers.ModelSerializer):
    class Meta:
     model=Cart
     fields ='__all__'