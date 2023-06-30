from rest_framework import serializers
from User.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','full_name','name', 'last_name', 'document_type','document_number','telephone',
                  'email','born_date','department','city','address','gender','password','photo', 'partnerType',
                  'clientType', 'primaryUser')
                  
