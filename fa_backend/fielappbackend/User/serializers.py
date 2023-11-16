from rest_framework import serializers
from User.models import User

class UserSerializer(serializers.ModelSerializer):
    #photo_File = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = '__all__'
        
    '''def get_photo_File(self, obj):
        request = self.context.get('request')
        photo_url = obj.photo_File.url if obj.photo_File else None
        # Aquí puedes retornar la URL o cualquier otra información relacionada con el archivo
        return request.build_absolute_uri(photo_url) if photo_url else None'''
        
   