from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import ShopProducts, ContactUs, Cart
from django.contrib.auth.models import User
from .models import UserProfile,BillingDetails


class RegistrationSerializer(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
    birth_date = serializers.DateField(required=False)
    image = serializers.ImageField(required=False)
    Phone_number = serializers.CharField(required=False)

    def create(self, validated_data):
        print("hello")
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        print(user)

        UserProfile.objects.create(
            user=user,
            birth_date=validated_data.get('birth_date'),
            image=validated_data.get('image'),
            Phone_number=validated_data.get('Phone_number')
        )

        return user


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProducts
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'



class BillingDetailsSerializer(serializers.ModelSerializer):
        class Meta:
         model =BillingDetails
         fields = '__all__'
