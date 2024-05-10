from django.contrib import admin

from .models import ShopProducts,ContactUs,Cart,UserProfile,BillingDetails

admin.site.register(ShopProducts)
admin.site.register(ContactUs)
admin.site.register(Cart)
admin.site.register(UserProfile)
admin.site.register(BillingDetails)

# Register your models here.
