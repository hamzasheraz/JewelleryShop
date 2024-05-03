from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import ShopProducts,ContactUs,Cart
from .Serializers import ProductSerializer,ContactSerializer,CartSerializer
from .forms import RegistrationForm
from django.contrib.auth.models import User


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
@permission_classes([IsAuthenticated])
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
            

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getuserdetails(request):
     user=request.user
     user_data={
        'username': user.username,
        'email': user.email,
        'firstname':user.first_name,
        'lastname':user.last_name,
     }
     return  Response(user_data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def storeincart(request):
        print("I am in Cart")
        user = request.user
        print(request.data)
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            items = serializer.validated_data['items']
            existing_cart = Cart.objects.filter(user=user, items=items).first()
            if existing_cart:
                existing_cart.number_of_items += 1
                existing_cart.save()
                return Response(CartSerializer(existing_cart).data, status=status.HTTP_200_OK)
            
            cart_instance = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getcartitems(request):
    user_id = request.user.id
    cart_items = Cart.objects.filter(user_id=user_id).select_related('items')
    # print(cart_items)
    items = [cart_item.items for cart_item in cart_items]

    serializer = ProductSerializer(items, many=True)  
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getcartitems2(request):
    user = request.user
    cart_items = Cart.objects.filter(user=user)
    
    many = cart_items.count() > 1  # Determine whether to serialize many items
    print(many)
    serializer = CartSerializer(cart_items, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_cart_item(request):
    try:
        item_id = request.data.get('id')
        if not item_id:
            return Response({"message": "ID of the item to delete is required"}, status=status.HTTP_400_BAD_REQUEST)

        cart_item = Cart.objects.get(pk=item_id, user=request.user)
    except Cart.DoesNotExist:
        return Response({"message": "Cart item not found"}, status=status.HTTP_404_NOT_FOUND)
    
    cart_item.delete()
    return Response({"message": "Cart item deleted successfully"}, status=status.HTTP_204_NO_CONTENT)