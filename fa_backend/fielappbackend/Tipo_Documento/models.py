from django.db import models

# Create your models here.

class Tipo_Documento(models.Model):
    Nom_documento = models.CharField(max_length=2, help_text="Introduzca las siglas del Tipo de Documento (Max 2 caracteres)", blank=False, default='',verbose_name='Nomenclatura Tipo Documento')
    Des_documento = models.CharField(max_length=50,help_text="Introduza la descripción del Tipo de Documento", blank=False, default='',verbose_name='Descripción Tipo Documento')
# Create your models here.
