from rest_framework import serializers
from .models import Country, Department, City, DocumentType, Gender

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['name', 'code']

class DepartmentSerializer(serializers.ModelSerializer):
    cities = CitySerializer(many=True, read_only=True)
    class Meta:
        model = Department
        fields = ['name', 'code', 'cities']
       # fields = ['name', 'code']

class CountrySerializer(serializers.ModelSerializer):
    departments = DepartmentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Country
        fields = ['name', 'code', 'departments']

class DocumentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentType
        fields = ['name', 'code']

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = ['name', 'code']
