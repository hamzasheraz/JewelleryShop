from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import ShopProducts,ContactUs,Cart


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