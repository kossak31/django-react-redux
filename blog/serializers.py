from rest_framework import serializers
from .models import CouponCode, Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        #fields = '__all__'
        fields = ['name', 'price']


class CouponCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouponCode
        fields = '__all__'
