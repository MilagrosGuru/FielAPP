# Generated by Django 4.0.1 on 2023-11-03 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DataInit', '0006_gender'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('code', models.CharField(max_length=3)),
            ],
        ),
    ]
