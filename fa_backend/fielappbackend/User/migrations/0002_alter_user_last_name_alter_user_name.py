# Generated by Django 4.1.7 on 2023-04-26 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, default='', max_length=150),
        ),
    ]