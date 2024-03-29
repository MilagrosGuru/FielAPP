# Generated by Django 4.0.1 on 2023-09-12 21:09

import datetime
from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reward',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activate', models.BooleanField(blank=True, default=False)),
                ('URL', models.ImageField(upload_to=None)),
                ('minimun_cost', models.FloatField(blank=True, default='', max_length=100)),
                ('description', models.CharField(blank=True, default='', max_length=600)),
                ('redeem_points', models.IntegerField(blank=True, default='')),
                ('datetime_activate', models.DateField(blank=True, default='1900-11-11', max_length=50)),
                ('has_expiration_date', models.BooleanField(blank=True, default=False)),
                ('datetime_expiration', models.DateField(blank=True, default='', max_length=50)),
                ('create_datetime', models.DateField(blank=True, default=datetime.date.today, max_length=50)),
                ('update_datetime', models.DateField(blank=True, default=datetime.date.today, max_length=50)),
                ('update_user', models.IntegerField(blank=True, default='')),
                ('create_user', models.IntegerField(blank=True, default='')),
                ('company', djongo.models.fields.JSONField(blank=True, null=True)),
            ],
        ),
    ]
