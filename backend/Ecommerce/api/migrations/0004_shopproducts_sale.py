# Generated by Django 4.2.4 on 2024-04-25 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_shopproducts_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='shopproducts',
            name='sale',
            field=models.BooleanField(default=False),
        ),
    ]
