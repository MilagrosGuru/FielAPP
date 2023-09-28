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
import json

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

class CompaniaListCreateView(generics.ListCreateAPIView): #creo compañia
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    collection = db.User_user

    def updateUser(self, serializer):
        user_id = self.kwargs['user_id']  # Obtener el ID del documento de la URL
        print(user_id)


class CompanyAPIView(APIView):   #otra forma de crear compañia
    def post(self, request, format=None):
        serializer = CompanySerializer(data=request.data)
        try:
            if serializer.is_valid():
                company = serializer.save()  # Guarda el objeto en la base de datos
                company_id = company.id  # Accede al ID del objeto creado
                print(company_id)
                company2 = {
                    'id_company': company.id,
                    'company_name': company.companyName,
                    'logo': company.logo
                }
                collection = db.User_user
                print(company)
                print(company.user_id)
                user = collection.find_one({'id': int(company.user_id)})
                print(user['object_company'])

                collection.update_one({'id': company.user_id}, {'$set': {'object_company':company2,
                                                                         'partnerType':True,
                                                                         'primaryUser':True
                                                                         }})


                return Response({"message": "Company created", "company_id": company_id}, status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print("Error:", str(e))






    

    #print(queryset)
    '''company = {
        'id_company': Company.id,
        'company_name': Company.companyName,
        'logo': Company.logo
    }
    print(company)
    #Utilizando $push para agregar el nuevo objeto al campo 'objetos
    collection.update_one({'id': Company.user_id}, {'$push': {'object_company':company}})
    #print("coleccion"+collection)'''

    

class CompanyList(APIView): #crear compañia y agrego al objeto usuario los datos de la misma
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
    
class CompanybyContact(APIView): #cuando el usuario retorna para una sola compañia
    def get(self, request, user_id): # Método GET para la búsqueda
        try:
            company = Company.objects.get(user_com_id=int(user_id)) # Busca el departamento por ID de usuario
            user = User.objects.get(id=int(user_id)) # Busca el departamento por ID de usuario

            print("usuario",user)
            # Aquí puedes realizar cualquier otra lógica necesaria con el estado encontrado
            # ...
            return Response({'logo': company.logo, 'empresa': company.companyName, 'contacto':company.user_com.full_name}, status=status.HTTP_200_OK)
        except Company.DoesNotExist:
            return Response({'error': 'Empresa no encontrada'}, status=status.HTTP_404_NOT_FOUND)
        


class CompanyGetByContact(APIView): #cuando un usuario esta en mas de una compañia
    @api_view(['GET'])
    def list_company(request, user_id):
    # Connect to the MongoDB database
        collection = db.Company_company
        company = list(collection.find({"user_com_id" : int(user_id)}))
        '''company_serializer = CompanySerializer(company) '''

        company_list = []
        for data_dict in company:
            data_dict.pop('_id', None)
            #_output = json.dumps(data_dict)
            company_list.append(data_dict)

        # Convertir la lista a una salida JSON
        

        print(company_list)

        return Response(company_list, status=status.HTTP_200_OK)

    


    
