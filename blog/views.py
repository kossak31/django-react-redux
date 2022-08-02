from django.shortcuts import render

# Create your views here.


from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.http import JsonResponse
from .models import Product
from .serializers import ProductSerializer

# Create your views here.


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer = ProductSerializer(products, many=True)
    # return Response(person)
    return JsonResponse(serializer.data)
