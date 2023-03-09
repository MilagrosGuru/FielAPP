from django.db import models

# Create your models here.

class Tipo_Documento(models.Model):
    Nom_documento = models.CharField(max_length=70, blank=False, default='')
    Des_documento = models.CharField(max_length=200,blank=False, default='')
# Create your models here.
