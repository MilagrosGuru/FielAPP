# Generated by Django 4.0.1 on 2023-11-15 20:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Reward', '0010_alter_reward_create_datetime_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reward',
            name='create_datetime',
            field=models.DateField(blank=True, default=datetime.datetime(2023, 11, 15, 15, 28, 48, 845266), max_length=50),
        ),
        migrations.AlterField(
            model_name='reward',
            name='update_datetime',
            field=models.DateField(blank=True, default=datetime.datetime(2023, 11, 15, 15, 28, 48, 845266), max_length=50),
        ),
    ]