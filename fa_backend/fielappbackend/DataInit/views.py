from django import apps
from django.shortcuts import render
from pymongo import MongoClient
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Country, Department, City, DocumentType, Gender
from .serializers import CountrySerializer, DocumentTypeSerializer, GenderSerializer
from rest_framework import status
from rest_framework.decorators import api_view

client = MongoClient(settings.MONGODB_HOST)
db = client[settings.MONGODB_DB]

class CountryView(APIView):
    def post(self, request):
        countries = [
            {
                'name': 'Argentina',
                'code': 'ARG',
                'departments': [
                    {
                        'name': 'Buenos Aires', 
                        'code': 'BA'
                     },
                    {
                        'name': 'Córdoba', 
                        'code': 'COR'
                    },
                    {
                        'name': 'Santa Fe', 
                        'code': 'SF'
                    },
                ]
            },    
        ]
        
        for country in countries:
            department_data = country.pop('departments')
            country_obj = Country.objects.create(**country)
            for department in department_data:
                #city_data = department.pop('cities')
                department_obj = Department.objects.create(country=country_obj, **department)

                '''for city in city_data:
                    City.objects.create(department=department_obj, **city)'''
                
            db.countries.insert_one(country) # Insertar datos en MongoDB
        
        return Response(CountrySerializer(Country.objects.all(), many=True).data)
    

class CountryStateList(APIView):
    def get(self, request):
        # Conexión a la base de datos MongoDB
        client = MongoClient(settings.MONGODB_HOST)
        db = client[settings.MONGODB_DB]

        # Consulta para obtener todos los países y sus estados
        countries = db.DataInit_country.find({}, {'_id': False})

        # Convertir el resultado a una lista y devolverla en la respuesta
        country_list = []
        for country in countries:
            country_list.append(country)
        return Response(country_list, status=status.HTTP_200_OK)
    
class DepartmentList(APIView):
    def get(self, request):
        # Conexión a la base de datos MongoDB
        client = MongoClient(settings.MONGODB_HOST)
        db = client[settings.MONGODB_DB]

        # Consulta para obtener todos los países y sus estados
        departments = db.DataInit_department.find({}, {'_id': False})

        # Convertir el resultado a una lista y devolverla en la respuesta
        department_list = []
        for department in departments:
            department_list.append(department)
        return Response(department_list, status=status.HTTP_200_OK)

'''class StateList(APIView):
    @api_view(['GET', 'PUT', 'DELETE'])
    def get(self, request):
        # Conexión a la base de datos MongoDB
        client = MongoClient(settings.MONGODB_HOST)
        db = client[settings.MONGODB_DB]

        # Consulta para obtener todos los países y sus estados
        estados = db.Configuration_estado.find({'pais_id': 1}, {'_id': False})

        # Convertir el resultado a una lista y devolverla en la respuesta
        estados_list = []
        for estado in estados:
            estados_list.append(estado)
        return Response(estados_list, status=status.HTTP_200_OK)'''


class DocumentTypeView(APIView):
    def post(self, request):
        documentTypes = [
            {
                'name': 'Cedula de Identidad',
                'code': 'CC',
                
            },  
            {
                'name': 'Cedula de Extranjeria',
                'code': 'CE',
                
            }    
        ]
        
        for documents in documentTypes:
            document_obj = DocumentType.objects.create(**documents)
            
            db.documentTypes.insert_one(documents) # Insertar datos en MongoDB
        
        return Response(DocumentTypeSerializer(DocumentType.objects.all(), many=True).data)
    

class DocumentTypeList(APIView):
    def get(self, request):
        # Conexión a la base de datos MongoDB
        client = MongoClient(settings.MONGODB_HOST)
        db = client[settings.MONGODB_DB]

        # Consulta para obtener todos los países y sus estados
        documents = db.DataInit_documenttype.find({}, {'_id': False})

        # Convertir el resultado a una lista y devolverla en la respuesta
        document_list = []
        for document in documents:
            document_list.append(document)
        return Response(document_list, status=status.HTTP_200_OK)
    
######GENDER#######################33

class GenderView(APIView):
    def post(self, request):
        gender = [
            {
                'name': 'Masculino',
                'code': 'MA',
                
            },  
            {
                'name': 'Femenino',
                'code': 'FE',
                
            }    
        ]
        
        for genders in gender:
            gender_obj = Gender.objects.create(**genders)
            
            db.documentTypes.insert_one(genders) # Insertar datos en MongoDB
        
        return Response(GenderSerializer(Gender.objects.all(), many=True).data)
    

class GenderList(APIView):
    def get(self, request):
        # Conexión a la base de datos MongoDB
        client = MongoClient(settings.MONGODB_HOST)
        db = client[settings.MONGODB_DB]

        # Consulta para obtener todos los países y sus estados
        genders = db.DataInit_gender.find({}, {'_id': False})

        # Convertir el resultado a una lista y devolverla en la respuesta
        gender_list = []
        for gender in genders:
            gender_list.append(gender)
        return Response(gender_list, status=status.HTTP_200_OK)
    
