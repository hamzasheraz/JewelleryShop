from django.urls import path
from . import views
from .views import WebHook, CreateCheckoutSession
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('getproducts', views.getProducts, name="products"),
    path('getcartitems', views.getcartitems, name="getcartitems"),
    path('getcartitemstwo', views.getcartitems2, name="getcartitems2"),
    path('deletecartitem', views.delete_cart_item, name="deletecartitem"),
    path('contactsubmit', views.addcontact, name="updatecontact"),
    path('updateuser', views.update_profile, name="updateuser"),
    path('updateuserprofile', views.update_userprofile, name="updateuser"),
    path('billing-details', views.create_billing_details, name="billing-details"),
    path('register', views.registerUser, name="registering_user"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('addtocart', views.storeincart, name="storeincart"),
    path('getuser', views.getuserdetails, name="getuserdetails"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('updateuser', views.update_profile, name="updateuser"),
    path('webhook-test/', WebHook.as_view()),
    path('create-checkout-session/', CreateCheckoutSession.as_view(),
         name='create_checkout_session'),

        #Forgot password urls
    path('reset_password/',auth_views.PasswordResetView.as_view(),name="reset_password"),
    path('reset_password_sent/',auth_views.PasswordResetDoneView.as_view(),name="password_reset_done"),
    path('reset/<uidb64>/<token>',auth_views.PasswordResetConfirmView.as_view(),name="password_reset_confirm"),
    path('reset_password_complete/',auth_views.PasswordResetCompleteView.as_view(),name="password_reset_complete"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
