from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import ShopProducts,ContactUs,Cart,UserProfile
from .Serializers import RegistrationSerializer,ProductSerializer,ContactSerializer,CartSerializer,UserSerializer,UserProfileSerializer
from .forms import RegistrationForm
from django.templatetags.static import static
from django.contrib.auth.models import User
# from django.contrib.auth import get_user_model

# User=get_user_model()

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
    serializer_class = MyTokenObtainPairSerializer


def getRoutes(request):
    return JsonResponse("Our Api", safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProducts(request):
    Products = ShopProducts.objects.all()
    if (Products):
        return Response(ProductSerializer(Products, many=True).data, status=status.HTTP_200_OK)
    else:
        return Response("Products not found", status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def addcontact(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)
    return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def registerUser(request):
#             print("Hello")
#             form = RegistrationForm(request.data)
#             if form.is_valid():
#                form.save()
#                return Response("Sucessful",status=status.HTTP_200_OK) # Redirect to login page after successful registration
#             else:
#                 return Response("Error is coming",status=status.HTTP_400_BAD_REQUEST)
            

@api_view(['POST'])
def registerUser(request):
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response("Successful", status=status.HTTP_200_OK)  # Redirect to login page after successful registration
    else:
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getuserdetails(request):
     user=request.user
     user_profile = UserProfile.objects.get(user=user)
     user_data= {
            'username': user.username,
            'email': user.email,
            'firstname': user.first_name,
            'lastname': user.last_name,
            'birth_date': user_profile.birth_date,
            'Phone_number': user_profile.Phone_number,
            'image': user_profile.image.url if user_profile.image else None,
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


# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def update_profile(request):
#     user = request.user
    
#     # Retrieve UserProfile object
#     try:
#         user_profile = UserProfile.objects.get(user=user)
#     except UserProfile.DoesNotExist:
#         return Response({'error': 'User profile not found'}, status=status.HTTP_404_NOT_FOUND)
    
#     # # Update User fields
#     # user_serializer = UserSerializer(user, data=request.data, partial=True)
#     # if user_serializer.is_valid():
#     #     user_serializer.save()
#     # else:
#     #     print(user_serializer.errors)
#     #     return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     # Update UserProfile fields
#     serializer=UserProfileSerializer(user_profile,many=False)
#     return Response(serializer.data)
#     profile_serializer = UserProfileSerializer(user_profile, data=request.data, partial=True)
#     if profile_serializer.is_valid():
#         profile_serializer.save()
#         return Response(profile_serializer.data)
#     else:
#         return Response(profile_serializer.errors, status=400)

#     return Response({'message': 'User data updated successfully'})




@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    # Get the authenticated user
    user = request.user

    # Deserialize the JSON data from request.body
    try:
        data = request.data
        print(data)
    except Exception as e:
        return Response({'error': str(e)}, status=400)

    # Update the user fields
    user_serializer = UserSerializer(user, data=data, partial=True)
    if user_serializer.is_valid():
        user_serializer.save()
        return Response(user_serializer.data)
    else:
        return Response(user_serializer.errors, status=400)
    
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from rest_framework.exceptions import ValidationError

@api_view(['PUT'])
def update_userprofile(request):
    try:
        # Accessing data from multipart form data
        phone_number = request.data.get('Phone_number')
        birth_date = request.data.get('birth_date')
        image = request.data.get('image')
    
        user_id = request.data.get('user_id')

        # Get the authenticated user's profile
        user_profile = get_object_or_404(UserProfile, user_id=user_id)
        print(user_profile)

        # Update the user profile fields
        
        user_profile.Phone_number = phone_number
        user_profile.birth_date = birth_date
        user_profile.image = image
        user_profile.save()

        # Serialize and return the updated user profile
        user_serializer = UserProfileSerializer(user_profile)
        return Response(user_serializer.data)

    except ValidationError as ve:
        return Response({'error': str(ve)}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print("Error updating user profile:", e)
        return Response({'error': 'Failed to update user profile'}, status=status.HTTP_400_BAD_REQUEST)

# import json
# from django.http import JsonResponse
# @api_view(['PUT'])
# def update_profile(request):
#  if request.method == 'PUT':
#         user = request.user
        
#         try:
#             user_profile = UserProfile.objects.get(user=user)
#         except UserProfile.DoesNotExist:
#             return JsonResponse({'error': 'User profile not found'}, status=404)
        
#         # Get the JSON data from request body
#         data = json.loads(request.body.decode('utf-8'))
        
#         # Update UserProfile fields
#         try:
#             if 'first_name' in data:
#                 user.first_name = data['first_name']
#             if 'last_name' in data:
#                 user.last_name = data['last_name']
#             if 'username' in data:
#                 user.username = data['username']
#             if 'email' in data:
#                 user.email = data['email']
#             if 'Phone_number' in data:
#                 user_profile.Phone_number = data['Phone_number']
#             if 'birth_date' in data:
#                 user_profile.birth_date = data['birth_date']
#             if 'image' in data:
#                 user_profile.image = data['image']
            
#             user.save()
#             user_profile.save()
            
#             return JsonResponse({'message': 'User data updated successfully'})
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=400)
#  else:
#         return JsonResponse({'error': 'Only PUT requests are allowed'}, status=405)