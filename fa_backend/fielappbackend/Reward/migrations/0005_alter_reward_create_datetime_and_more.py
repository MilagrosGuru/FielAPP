# Generated by Django 4.0.1 on 2023-10-20 16:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Reward', '0004_alter_reward_url_alter_reward_create_datetime_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reward',
            name='create_datetime',
            field=models.DateField(blank=True, default=datetime.datetime(2023, 10, 20, 11, 56, 18, 845534), max_length=50),
        ),
        migrations.AlterField(
            model_name='reward',
            name='update_datetime',
            field=models.DateField(blank=True, default=datetime.datetime(2023, 10, 20, 11, 56, 18, 845534), max_length=50),
        ),
    ]
