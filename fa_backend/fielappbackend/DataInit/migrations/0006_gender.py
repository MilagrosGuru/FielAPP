# Generated by Django 4.1.7 on 2023-04-17 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DataInit', '0005_documenttype'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gender',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('code', models.CharField(max_length=3)),
            ],
        ),
    ]
