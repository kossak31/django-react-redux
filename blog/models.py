from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

# Create your models here.


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(
        null=True, blank=True, default="/images/placeholder.png", upload_to="images/")
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name + " | " + str(self.price)


class CouponCode(models.Model):
    coupon = models.CharField(max_length=10, unique=True, validators=[RegexValidator(
        '^[A-Z_0-9]*$', 'Only uppercase letters and numbers and underscores allowed.')],)
    qty = models.PositiveIntegerField(
        default=0, validators=[MaxValueValidator(50)])
    valid_from = models.DateTimeField(auto_now_add=False, null=False)
    valid_to = models.DateTimeField(auto_now_add=False, null=False)
    describe = models.CharField(max_length=200, null=True, blank=True)
    value = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)])
    active = models.BooleanField(default=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.coupon)
