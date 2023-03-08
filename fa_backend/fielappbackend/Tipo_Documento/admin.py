from django.contrib import admin
from Tipo_Documento.models import Tipo_Documento

# Register your models here.

@admin.register(Tipo_Documento)
class TTipo_DocumentoAdmin(admin.ModelAdmin):
    list_display = ['id','Nom_documento']

# Register your models here.
