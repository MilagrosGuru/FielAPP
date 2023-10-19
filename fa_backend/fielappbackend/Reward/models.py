from djongo import models
from datetime import date


class Reward(models.Model):
    activate= models.BooleanField(default=False, blank=True)
    '''URL = models.URLField(max_length=200, blank=True, default='')'''
    URL = models.FileField(upload_to='uploads/')  # Campo FileField
    minimun_cost = models.FloatField(max_length=100, blank=True, default='')
    description= models.CharField(max_length=600, blank=True, default='')
    redeem_points= models.IntegerField(blank=True, default='')
    datetime_activate = models.DateField(max_length=50, blank=True, default='1900-11-11')
    has_expiration_date = models.BooleanField(default=False, blank=True)
    datetime_expiration = models.DateField(max_length=50, blank=True, default='1900-11-11')
    create_datetime= models.DateField(max_length=50, blank=True, default=date.today)
    update_datetime= models.DateField(max_length=50, blank=True, default=date.today) #si es la primera vez es el mismo create_datetime
    update_user= models.IntegerField(blank=True, default='') #quien lo actualizo
    create_user = models.IntegerField(blank=True, default='') #quien creo el premio
    company = models.JSONField(null=True, blank=True) #empresa

