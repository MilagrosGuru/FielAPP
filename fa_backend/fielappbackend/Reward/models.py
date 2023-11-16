from djongo import models
#from storages.backends.s3boto3 import S3Boto3Storage
from datetime import datetime


class Reward(models.Model):
    activate= models.BooleanField(default=False, blank=True)
    #URL = models.FileField(upload_to='uploads/', storage=S3Boto3Storage())  # Campo FileField
    URL = models.FileField(upload_to='uploads/')  # Campo FileField
    minimun_cost = models.FloatField(max_length=100, blank=True, default='')
    description= models.CharField(max_length=600, blank=True, default='')
    redeem_points= models.IntegerField(blank=True, default='')
    datetime_activate = models.DateField(max_length=50, blank=True, default='1900-11-11')
    has_expiration_date = models.BooleanField(default=False, blank=True)
    datetime_expiration = models.DateField(max_length=50, blank=True, default='1900-11-11')
    create_datetime= models.DateField(max_length=50, blank=True, default=datetime.now())
    update_datetime= models.DateField(max_length=50, blank=True, default=datetime.now()) #si es la primera vez es el mismo create_datetime
    update_user= models.IntegerField(blank=True, default='') #quien lo actualizo
    create_user = models.IntegerField(blank=True, default='') #quien creo el premio
    company = models.JSONField(null=True, blank=True) #empresa

