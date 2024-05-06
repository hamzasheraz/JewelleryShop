from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('getproducts', views.getProducts, name="products"),
<<<<<<< HEAD
    path('getcartitems', views.getcartitems, name="getcartitems"),
    path('getcartitemstwo', views.getcartitems2, name="getcartitems2"),
    path('deletecartitem', views.delete_cart_item, name="deletecartitem"),
    path('contactsubmit', views.addcontact, name="updatecontact"),
    path('register',views.registerUser,name="registering_user"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('addtocart',views.storeincart,name="storeincart"),
    path('getuser',views.getuserdetails,name="getuserdetails"),
=======
    path('contactsubmit', views.addcontact, name="updatecontact"),
    path('register',views.registerUser,name="registering_user"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
>>>>>>> 1a5ca2cca2567f38d7fb50715b3a34877b1ea244
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)