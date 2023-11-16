from django import apps
from django.forms import JSONField, ValidationError
from django.shortcuts import render
from pymongo import MongoClient
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from .models import User
from rest_framework import status
from rest_framework.decorators import api_view
from bson.objectid import ObjectId
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json
import logging

client1 = MongoClient(settings.MONGODB_HOST)
db = client1[settings.MONGODB_DB]

class UserView(APIView):
    def post(self, request):
        print("entro")

        data = request.data
        name_array = data['full_name'].split()
        name = name_array[0]
        last_name = name_array[1]
        
        request.data['name'] = name
        request.data['last_name'] = last_name

        if data['born_date'] == '':
            request.data['born_date'] = '1900-11-11'

        user_serializer = UserSerializer(data=request.data)
        try:
            if user_serializer.is_valid():
                   # print("entro serializador ",user_serializer.validated_datap)
                    user_serializer.save()
                    
                    partial_data = {
                        'id': user_serializer.data.get('id'),
                        'email': user_serializer.data.get('email')
                    }
                    return JsonResponse(partial_data, status=status.HTTP_201_CREATED) 
            return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
        except Exception as e:
                #logger.error(f"Ocurrió un error: {e}")
                import traceback
                traceback.print_exc()
                return JsonResponse(user_serializer, status=status.HTTP_400_BAD_REQUEST) 


'''class UserView(APIView):
    def post(self, request):
            

            logger = logging.getLogger(__name__)
            print("hola")
            data = request.data
            name_array = data['full_name'].split()
            name = name_array[0]
            last_name = name_array[1]
            print("1")
            
            request.data['name'] = name
            request.data['last_name'] = last_name

            if data['born_date'] == '':
                request.data['born_date'] = '1900-11-11'

            print("3")

            minimal_data = {
                'full_name': 'Graciela Pérez'
            }
            print("4")
            #print(request.data['object_company'])

            user_serializer = UserSerializer(data=request.data)
            #user_serializer = UserSerializer(data=minimal_data)
            print("5")
            print(user_serializer)
            #db.countries.insert_one(users) # Insertar datos en MongoDB

            try:
                if user_serializer.is_valid():
                    print("es valido el serializador")
                    #user_serializer.create_custom()
                    user = User.create_custom(full_name=request.data['full_name'], name=request.data['name'], last_name=request.data['last_name'],document_type=request.data['document_type'], 
                                              document_number=request.data['document_number'],telephone=request.data['telephone'],email=request.data['email'], born_date=request.data['born_date'], 
                                              department=request.data['department'], city=request.data['city'], address=request.data['address'],gender=request.data['gender'], 
                                              password=request.data['password'], photo=request.data['photo'], object_company=[], clientType=False,
                                              partnerType=False, primaryUser=False)
                    return Response(user.data, status=status.HTTP_201_CREATED)

                else:
                    raise ValidationError("Los datos no son válidos según el serializador.")
            except ValidationError as e:
                print("Error de validación:", e)
            except Exception as e:
                logger.error(f"Ocurrió un error: {e}")

            return Response(user.data, status=status.HTTP_201_CREATED)


          if user_serializer.is_valid():
                    print("entro")
                    user_serializer.save()
                    print("guardo")
                    return Response(user_serializer.data, status=status.HTTP_201_CREATED)
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            partial_data = {
                        'id': user_serializer.data.get('id'),
                        'email': user_serializer.data.get('email')
                    }
                    #return JsonResponse(partial_data, status=status.HTTP_201_CREATED) 
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            print("3")'''
            
            #return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
            #return Response(UserSerializer(User.objects.all(), many=True).data)'''     


class UserUpdate(APIView):
    @api_view(['GET','PUT'])
    def update_user(request, user_id):
    # Connect to the MongoDB database
        collection = db.User_user
        user = collection.find_one({'id': int(user_id)})
        if request.method=='PUT':
            # Get the user document with the provided ID
            #user = collection.find_one({'_id': user_id})
            if user is not None:
                # Update the user document with the provided data
                data = json.loads(request.body)
                data['full_name']=request.data['name']+' '+request.data['last_name']
                print(data['full_name'])
                
                collection.update_one({'id': int(user_id)}, {'$set': data})
                partial_data = {
                    'id': user['id']
                }

                # Return a success response
                return JsonResponse(partial_data, status=status.HTTP_200_OK) 
            else:
                # Return an error response if the user is not found
                return JsonResponse(data.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'GET':   
            user_serializer = UserSerializer(user) 
            return JsonResponse(user_serializer.data)
        

        

    @api_view(['PUT'])
    def client_partner_user(request, user_id):
    # Connect to the MongoDB database
        collection = db.User_user
        user = collection.find_one({'id': int(user_id)})
            # Get the user document with the provided ID
            #user = collection.find_one({'_id': user_id})
        if user is not None:
                # Update the user document with the provided data
            data = json.loads(request.body)
            collection.update_one({'id': int(user_id)}, {'$set': data})
            partial_data = {
                'id': user['id']
            }

                # Return a success response
            return JsonResponse(partial_data, status=status.HTTP_200_OK) 
        else:
                # Return an error response if the user is not found
            return JsonResponse(data.errors, status=status.HTTP_400_BAD_REQUEST)
        

class UserUpdateAddCompany(APIView):#se actualiza usuario para agregar objeto company
    @api_view(['GET','PUT'])
    def update_user(request, user_id):
    # Connect to the MongoDB database
        collection = db.User_user
        user = collection.find_one({'id': int(user_id)})
        if request.method=='PUT':

            # Get the user document with the provided ID
            #user = collection.find_one({'_id': user_id})
            if user is not None:
                # Update the user document with the provided data
                data = json.loads(request.body)
                data['full_name']=request.data['name']+' '+request.data['last_name']
                print(data['full_name'])
                
                collection.update_one({'id': int(user_id)}, {'$set': data})
                partial_data = {
                    'id': user['id']
                }

                # Return a success response
                return JsonResponse(partial_data, status=status.HTTP_200_OK) 
            else:
                # Return an error response if the user is not found
                return JsonResponse(data.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'GET':   
            user_serializer = UserSerializer(user) 
            return JsonResponse(user_serializer.data)
        
    

    

    
 