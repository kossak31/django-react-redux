
from rest_framework.response import Response
from rest_framework.decorators import api_view

from blog.models import Product, CouponCode
from blog.serializers import ProductSerializer, CouponCodeSerializer
# Create your views here.


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_product(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET'])
def get_coupons(request):
    coupons = CouponCode.objects.all()
    serializer = CouponCodeSerializer(coupons, many=True)
    return Response(serializer.data)
