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
from bson.objectid import ObjectId
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

client = MongoClient(settings.MONGODB_HOST)
db = client[settings.MONGODB_DB]

class CountryView(APIView):
    def post(self, request):
        countries = [JSONParser().parse(request)]
        
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

class DepartmentViewId(APIView):
    def get(self, request, department_id): # Método GET para la búsqueda
        try:
            department = Department.objects.get(id=department_id) # Busca el departamento por ID
            # Aquí puedes realizar cualquier otra lógica necesaria con el estado encontrado
            # ...
            return Response({'id': department_id, 'nombre': department.name}, status=status.HTTP_200_OK)
        except Department.DoesNotExist:
            return Response({'error': 'Departamento no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
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
        documentTypes = [JSONParser().parse(request)]
        
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
    
class DocumentTypeViewId(APIView):
    def get(self, request, document_id): # Método GET para la búsqueda
        try:
            document = DocumentType.objects.get(id=document_id) # Busca el estado por ID
            # Aquí puedes realizar cualquier otra lógica necesaria con el estado encontrado
            # ...
            return Response({'id': document_id, 'nombre': document.name}, status=status.HTTP_200_OK)
        except DocumentType.DoesNotExist:
            return Response({'error': 'Tipo de Documento no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        


      


    
######GENDER#######################33

class GenderView(APIView):
    def post(self, request):
        gender = [JSONParser().parse(request)]
        
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
    

class GenderViewId(APIView):
    def get(self, request, gender_id): # Método GET para la búsqueda
        try:
            gender = Gender.objects.get(id=gender_id) # Busca el genero por ID
            # Aquí puedes realizar cualquier otra lógica necesaria con el estado encontrado
            # ...
            return Response({'id': gender_id, 'nombre': gender.name}, status=status.HTTP_200_OK)
        except Gender.DoesNotExist:
            return Response({'error': 'Género no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
    
