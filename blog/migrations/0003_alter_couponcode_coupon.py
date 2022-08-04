# Generated by Django 4.0.6 on 2022-08-04 10:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_couponcode_delete_couponcodes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='couponcode',
            name='coupon',
            field=models.CharField(max_length=10, unique=True, validators=[django.core.validators.RegexValidator('^[A-Z_]*$', 'Only uppercase letters and underscores allowed.')]),
        ),
    ]
