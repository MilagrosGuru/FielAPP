from django import apps
from django.shortcuts import render
from pymongo import MongoClient
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from bson.objectid import ObjectId
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json

client1 = MongoClient(settings.MONGODB_HOST)
db = client1[settings.MONGODB_DB]

class UserView(APIView):
    def post(self, request):

        data = request.data
        name_array = data['full_name'].split()
        name = name_array[0]
        last_name = name_array[1]
        
        request.data['name'] = name
        request.data['last_name'] = last_name

        if data['born_date'] == '':
            request.data['born_date'] = '1900-11-11'

        

        #users = JSONParser().parse(request)

        #user_serializer = UserSerializer(data=users)
        user_serializer = UserSerializer(data=request.data)
     
        #db.countries.insert_one(users) # Insertar datos en MongoDB
        if user_serializer.is_valid():
                user_serializer.save()
                partial_data = {
                    'id': user_serializer.data.get('id'),
                    'email': user_serializer.data.get('email')
                }
                return JsonResponse(partial_data, status=status.HTTP_201_CREATED) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
        #return Response(UserSerializer(User.objects.all(), many=True).data)'''     

class UserUpdate(APIView):
    @api_view(['GET','PUT'])
    def update_user(request, user_id):
    # Connect to the MongoDB database
        collection = db.User_user
        user = collection.find_one({'id': int(user_id)})
        print(request.method)
        if request.method=='PUT':
            # Get the user document with the provided ID
            #user = collection.find_one({'_id': user_id})
            if user is not None:
                # Update the user document with the provided data
                data = json.loads(request.body)
                print(data)
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
        
    

    

    
 