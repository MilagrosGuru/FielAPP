# Generated by Django 4.0.1 on 2023-11-15 20:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Reward', '0007_alter_reward_url_alter_reward_create_datetime_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reward',
            name='create_datetime',
            field=models.DateField(blank=True, default=datetime.datetime(2023, 11, 15, 15, 16, 8, 971360), max_length=50),
        ),
        migrations.AlterField(
            model_name='reward',
            name='update_datetime',
            field=models.DateField(blank=True, default=datetime.datetime(2023, 11, 15, 15, 16, 8, 971360), max_length=50),
        ),
    ]
