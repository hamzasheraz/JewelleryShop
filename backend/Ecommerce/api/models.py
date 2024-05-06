from django.db import models
from django.contrib.auth.models import User,AbstractUser
# from django.contrib.auth import get_user_model


# User=get_user_model()


# class CustomUser(AbstractUser):
#       phone_number=models.CharField(max_length=100,unique=True)
#       user_image=models.ImageField(upload_to='djangouploads/files/covers')
#       birth_date = models.DateField(null=True, blank=True)




class ShopProducts(models.Model):
    Product_name=models.TextField(null=False,blank=False,max_length=50)
    image=models.ImageField(upload_to='djangouploads/files/covers')
    category=models.CharField(max_length=10,null=False,blank=False,default="men")
    price=models.IntegerField(null=False,blank=False,default=1)
    sale=models.BooleanField(default=False)

class ContactUs(models.Model):
     name=models.CharField(max_length=20)
     email= models.EmailField(max_length=70,blank=True,unique=True)
     subject=models.TextField(null=False,blank=False,max_length=50)
     message=models.TextField(null=False,blank=False,max_length=200)


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.ForeignKey(ShopProducts, on_delete=models.CASCADE)
    number_of_items = models.IntegerField(null=False, blank=False, default=1)


class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    birth_date = models.DateField(null=True, blank=True)
    image=models.ImageField(upload_to='djangouploads/files/covers')
    Phone_number=models.CharField(null=True,blank=True,max_length=11)



# Create your models here.
