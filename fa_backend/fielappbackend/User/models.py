from django.db import models
from django.contrib.postgres.fields import ArrayField

class User(models.Model):
    full_name= models.CharField(max_length=150, default='')
    name= models.CharField(max_length=150, blank=True, default='')
    last_name = models.CharField(max_length=100, blank=True, default='')
    document_type= models.CharField(max_length=4, blank=True, default='')
    document_number= models.CharField(max_length=15, blank=True, default='')
    telephone = models.CharField(max_length=12, blank=True, default='')
    email = models.EmailField(blank=True, default='')
    born_date = models.CharField(max_length=30, default='1900-11-11')
    department= models.CharField(max_length=50, blank=True, default='')
    city= models.CharField(max_length=50, blank=True, default='')
    address= models.CharField(max_length=50, blank=True, default='')
    gender= models.CharField(max_length=15, blank=True, default='')
    password = models.CharField(max_length=100, blank=True, default='')
    photo= models.CharField(max_length=400, blank=True, default='')
    object_company = models.JSONField(null=True, blank=True)



    #object_company = ArrayField(models.CharField(max_length=150), blank=True, default='')
    # created_at = models.DateTimeField(auto_now_add=True)

   #se adicionan los siguientes campos a la BD
    clientType= models.BooleanField(default=False, blank=True)
    partnerType= models.BooleanField(default=False, blank=True)
    primaryUser = models.BooleanField(default=False, blank=True)



