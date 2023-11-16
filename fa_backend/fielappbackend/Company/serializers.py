from rest_framework import serializers
from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    '''categories = CategorySerializer(many=True, read_only=True)
    departments = 'DataInit.serializers.DepartmentSerializer'
    countries = 'DataInit.serializers.CountrySerializer'
    users = 'User.serializers.UserSerializer'''
    class Meta:
        model = Company
        '''fields = ['logo', 'NIT','companyName', 'categories', 'timetable','countries' ,'departments',
                  'user_id','address','telephone', 'full_name','setup_type_reward]'''
        fields = '__all__'
