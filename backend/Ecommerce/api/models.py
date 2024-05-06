from django.db import models
from django.contrib.auth.models import User

class ShopProducts(models.Model):
    Product_name=models.TextField(null=False,blank=False,max_length=50)
    image=models.ImageField(upload_to='djangouploads/files/covers')
    category=models.CharField(max_length=10,null=False,blank=False,default="men")
    price=models.IntegerField(null=False,blank=False,default=1)
    sale=models.BooleanField(default=False)

    def __str__(self):
         return f"{self.Product_name} {self.category}"

class ContactUs(models.Model):
     name=models.CharField(max_length=20)
     email= models.EmailField(max_length=70,blank=True,unique=True)
     subject=models.TextField(null=False,blank=False,max_length=50)
     message=models.TextField(null=False,blank=False,max_length=200)
     def __str__(self):
          return f"{self.email} {self.subject}"


class Cart(models.Model):
     user=models.ForeignKey(User,on_delete=models.CASCADE)
     items=models.ForeignKey(ShopProducts,on_delete=models.CASCADE)
     number_of_items=models.IntegerField(null=False,blank=False,default=1)


# Create your models here.
