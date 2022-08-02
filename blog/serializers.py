from rest_framework import serializers
from .models import CouponCodes, Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        #fields = '__all__'
        fields = ['name', 'price']


class CouponCodesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouponCodes
        fields = '__all__'
