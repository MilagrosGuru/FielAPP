from rest_framework import serializers
from .models import Company, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'code']

class CompanySerializer(serializers.ModelSerializer):
    '''categories = CategorySerializer(many=True, read_only=True)
    departments = 'DataInit.serializers.DepartmentSerializer'
    countries = 'DataInit.serializers.CountrySerializer'
    users = 'User.serializers.UserSerializer'''
    class Meta:
        model = Company
        '''fields = ['logo', 'NIT','companyName', 'categories', 'timetable','countries' ,'departments',
                  'users','address','telephone']'''
        fields = '__all__'
