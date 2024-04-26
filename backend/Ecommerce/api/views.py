from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import ShopProducts,ContactUs
from .Serializers import ProductSerializer,ContactSerializer




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



