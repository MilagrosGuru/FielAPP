from djongo import models

from DataInit.models import Country, Department, Category
from User.models import User
#from storages.backends.s3boto3 import S3Boto3Storage


class Company(models.Model):
    #logo = models.FileField(upload_to='uploads/', storage=S3Boto3Storage())  # Campo FileField
    logo = models.FileField(upload_to='uploads/')  # Campo FileField
    companyName = models.CharField(max_length=150)
    NIT = models.CharField(max_length=15)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, default='')
    timetable = models.CharField(max_length=50)
    country_com = models.ForeignKey(Country, on_delete=models.CASCADE, blank=True, default='')
    department_com = models.ForeignKey(Department, on_delete=models.CASCADE, blank=True, default='')
    user_id =  models.IntegerField(blank=True, default='')
    address = models.CharField(max_length=300)
    telephone = models.CharField(max_length=15)
    full_name = models.CharField(blank=True, default='', max_length=300)
    setup_type_reward = models.IntegerField(blank=True, default='')
    
    


