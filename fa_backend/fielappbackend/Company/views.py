import json
from django import apps
from django.http import HttpResponseServerError
from django.shortcuts import render
from pymongo import MongoClient
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Company, User
from .serializers import  CompanySerializer
from rest_framework import status
from rest_framework.decorators import api_view
from bson.objectid import ObjectId
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import generics
from django.shortcuts import get_object_or_404


client = MongoClient(settings.MONGODB_HOST)
db = client[settings.MONGODB_DB]

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
                print("data: ",request.data)
                company = serializer.save() 
                print("3") # Guarda el objeto en la base de datos
                company_id = company.id  # Accede al ID del objeto creado

                company2 = {
                    'id_company': company.id,
                    'company_name': company.companyName,
                    'logo': company.logo.path
                }

                collection = db.User_user
                print(company.logo)
                print(company2)

                collection.update_one({'id': company.user_id}, {'$set': {'object_company':company2,
                                                                         'partnerType':True,
                                                                         'primaryUser':True
                                                                         }})


                return Response({"message": "Company created", "company_id": company_id}, status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print("Error:", str(e))

    @api_view(['PUT'])
    def put_setup_type_reward(request, comp_id, setup_type_reward): #historia fiealpp-135
    # Connect to the MongoDB database
        collection = db.Company_company
        company = collection.find_one({'id': int(comp_id)})
           
        if company is not None:
                # Update the user document with the provided data

            collection.update_one({'id': int(comp_id)}, {'$set': {'setup_type_reward':setup_type_reward}})

            partial_data = {
                'id_company': company['id']
            }

                # Return a success response
            return JsonResponse(partial_data, status=status.HTTP_200_OK) 
        else:
                # Return an error response if the user is not found
            return JsonResponse(data.errors, status=status.HTTP_400_BAD_REQUEST)






    

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
        companies = db.Company_company.find({}, {'_id': False})

        # Convertir el resultado a una lista y devolverla en la respuesta
        company_list = []
        for company in companies:
            company_list.append(company)

        return Response(company_list, status=status.HTTP_200_OK)
    
class CompanybyContact(APIView): #cuando el usuario retorna para una sola compañia Fielapp #90
    def get(self, request, user_id): # Método GET para la búsqueda
        print("enrooo")
        try:
            company_instance = get_object_or_404(Company, user_id=user_id)
            print("enrooo: ",company_instance.logo)

            # Accede al campo FileField
            logo_file = company_instance.logo
            # Abre el archivo y lee su contenido en bytes
            with open(logo_file.path, 'rb') as file:
                file_content_bytes = file.read()
            
            file_content_str = file_content_bytes.decode('utf-8', errors='replace')
                
            return Response({'logo': file_content_str, 'empresa': company_instance.companyName, 'contacto':company_instance.full_name, 'setup_type_reward':company_instance.setup_type_reward}, status=status.HTTP_200_OK)
        except Exception as e:
            # Manejar la excepción y devolver una respuesta de error
            return HttpResponseServerError(f"Error: {e}")


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

    


    
