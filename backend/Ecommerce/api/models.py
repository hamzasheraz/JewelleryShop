from django.db import models

# class User:
#     email=models.EmailField(max_length=254,blank=False,null=False)
#     image=models.ImageField(upload_to='djangouploads/files/covers')



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

# Create your models here.
