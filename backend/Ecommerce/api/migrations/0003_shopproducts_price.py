# Generated by Django 4.2.4 on 2024-04-25 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_shopproducts_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='shopproducts',
            name='price',
            field=models.IntegerField(default=1),
        ),
    ]