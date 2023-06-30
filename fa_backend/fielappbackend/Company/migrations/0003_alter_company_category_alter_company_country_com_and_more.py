# Generated by Django 4.1.7 on 2023-06-29 22:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0005_alter_user_born_date'),
        ('DataInit', '0006_gender'),
        ('Company', '0002_alter_company_companyname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='category',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, to='Company.category'),
        ),
        migrations.AlterField(
            model_name='company',
            name='country_com',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, to='DataInit.country'),
        ),
        migrations.AlterField(
            model_name='company',
            name='department_com',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, to='DataInit.department'),
        ),
        migrations.AlterField(
            model_name='company',
            name='timetable',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='company',
            name='user_com',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, to='User.user'),
        ),
    ]
