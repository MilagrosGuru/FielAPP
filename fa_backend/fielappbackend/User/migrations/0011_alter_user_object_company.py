# Generated by Django 4.0.1 on 2023-08-31 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0010_alter_user_object_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='object_company',
            field=models.JSONField(blank=True, null=True),
        ),
    ]