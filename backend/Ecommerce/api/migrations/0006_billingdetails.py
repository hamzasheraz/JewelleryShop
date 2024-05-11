# Generated by Django 4.2.4 on 2024-05-10 18:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rename_user_userprofile'),
    ]

    operations = [
        migrations.CreateModel(
            name='BillingDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=100)),
                ('Zip_Code', models.CharField(max_length=10)),
                ('City', models.CharField(max_length=40)),
                ('Country', models.CharField(max_length=40)),
                ('created_at', models.DateField(auto_now_add=True)),
            ],
        ),
    ]