# Generated by Django 4.2.4 on 2024-05-06 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='Phone_number',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
