from django import apps
from django.shortcuts import render
from pymongo import MongoClient
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Company, Country, Department, User
from .serializers import CategorySerializer, CompanySerializer
from rest_framework import status
from rest_framework.decorators import api_view
from bson.objectid import ObjectId
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import generics

client = MongoClient(settings.MONGODB_HOST)
db = client[settings.MONGODB_DB]

class CategoryView(APIView):
    def post(self, request):
        categories = [JSONParser().parse(request)]
        
        for category in categories:
            category_obj = Category.objects.create(**category)
                
            db.categories.insert_one(category) # Insertar datos en MongoDB
        
        return Response(CategorySerializer(Category.objects.all(), many=True).data)
    

class CategoryList(APIView):
    def get(self, request):
        # Conexión a la base de datos MongoDB
        client = MongoClient(settings.MONGODB_HOST)
        db = client[settings.MONGODB_DB]

        # Consulta para obtener todos los países y sus estados
        categories = db.DataInit_category.find({}, {'_id': False})

        # Convertir el resultado a una lista y devolverla en la respuesta
        category_list = []
        for category in categories:
            category_list.append(category)
        return Response(category_list, status=status.HTTP_200_OK)
    
'''class CompanyView(APIView):
    def post(self, request):
        try:
            companies = [JSONParser().parse(request)]
            for company in companies:
                category_data = company.pop('categories')
                country_data = company.pop('countries')
                department_data = company.pop('departments')
                user_data = company.pop('users')
                company_obj = Company.objects.create(**company)
                for categories in category_data:
                    category_obj = Category.objects.create(company=company_obj, **categories)
                
                for countries in country_data:
                    country_obj = Country.objects.create(company=company_obj, **countries)
                
                for departments in department_data:
                    department_obj = Department.objects.create(company=company_obj, **departments)
                
                for users in user_data:
                    user_obj = User.objects.create(company=company_obj, **users)   
             
                db.companies.insert_one(company) # Insertar datos en MongoDB
            
            return Response(CompanySerializer(Company.objects.all(), many=True).data)
        except Exception as e:
            print(e)'''

class CompaniaListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    

class CompanyList(APIView):
    def get(self, request):
        # Conexión a la base de datos MongoDB
        client = MongoClient(settings.MONGODB_HOST)
        db = client[settings.MONGODB_DB]

        # Consulta para obtener todos los países y sus estados
        companies = db.DataInit_company.find({}, {'_id': False})

        # Convertir el resultado a una lista y devolverla en la respuesta
        company_list = []
        for company in companies:
            company_list.append(company)
        return Response(company_list, status=status.HTTP_200_OK)
    
