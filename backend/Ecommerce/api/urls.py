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
    path('contactsubmit', views.addcontact, name="updatecontact"),
    path('register',views.registerUser,name="registering_user"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)