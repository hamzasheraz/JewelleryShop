from django.contrib import admin

from .models import ShopProducts,ContactUs,Cart,UserProfile

admin.site.register(ShopProducts)
admin.site.register(ContactUs)
admin.site.register(Cart)
admin.site.register(UserProfile)

# Register your models here.
