from django.db import models

class User(models.Model):
    full_name= models.CharField(max_length=150, default='')
    name= models.CharField(max_length=150, blank=True, default='')
    last_name = models.CharField(max_length=100, blank=True, default='')
    document_type= models.CharField(max_length=4, blank=True, default='')
    document_number= models.CharField(max_length=15, blank=True, default='')
    telephone = models.CharField(max_length=12, blank=True, default='')
    email = models.EmailField(blank=True, default='')
    born_date = models.DateField(blank=True)
    department= models.CharField(max_length=50, blank=True, default='')
    city= models.CharField(max_length=50, blank=True, default='')
    address= models.CharField(max_length=50, blank=True, default='')
    gender= models.CharField(max_length=15, blank=True, default='')
    password = models.CharField(max_length=100, blank=True, default='')
    photo= models.CharField(max_length=100, blank=True, default='')
   # created_at = models.DateTimeField(auto_now_add=True)