from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import ShopProducts,ContactUs
from .Serializers import ProductSerializer,ContactSerializer
from .forms import RegistrationForm


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer



def getRoutes(request):
    return JsonResponse("Our Api",safe=False)

@api_view(['GET'])
def getProducts(request):
    Products=ShopProducts.objects.all()
    if(Products):
        return Response(ProductSerializer(Products,many=True).data,status=status.HTTP_200_OK)
    else:
        return Response("Products not found",status=status.HTTP_400_BAD_REQUEST)
 

@api_view(['POST'])
def addcontact(request):
    serializer=ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)
    return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def registerUser(request):
            print("Hello")
            form = RegistrationForm(request.data)
            if form.is_valid():
               form.save()
               return Response("Sucessful",status=status.HTTP_200_OK) # Redirect to login page after successful registration
            else:
                return Response("Error is coming",status=status.HTTP_400_BAD_REQUEST)