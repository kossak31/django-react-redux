from django.urls import path
from . import views

urlpatterns = [
    path('produtos', views.get_products),
    path('add', views.create_product),
    path('coupons', views.get_coupons),
]
