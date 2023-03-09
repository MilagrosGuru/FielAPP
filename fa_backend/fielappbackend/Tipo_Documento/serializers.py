from rest_framework import serializers 
from Tipo_Documento.models import Tipo_Documento
 
 
class Tipo_DocumentoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tipo_Documento
        fields = ('id',
                  'Nom_documento',
                  'Des_documento')