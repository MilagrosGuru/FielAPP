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

client = MongoClient(settings.MONGODB_HOST)
db = client[settings.MONGODB_DB]

class UserView(APIView):
    def post(self, request):

        #data = request.POST.get('_content')
        #elementos = data.split()

        #if len(elementos) >= 3:
         #   name = elementos[2]
        #if len(elementos) >= 4:
         #   last_name = elementos[3]

        #print("name: ", name)
        #print("last_nama: ", last_name)

        users = JSONParser().parse(request)

        user_serializer = UserSerializer(data=users)
       
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
    

    def user_detail(request, pk):
    # find tutorial by pk (id)
        try: 
            user = User.objects.get(pk=pk) 
            if request.method == 'GET': 
                user_serializer = UserSerializer(user) 
                return JsonResponse(user_serializer.data)
            elif request.method == 'PUT': 
                user_data = JSONParser().parse(request) 
                user_serializer = UserSerializer(user, data=user_data) 
                if user_serializer.is_valid(): 
                    user_serializer.save() 
                    return JsonResponse(user_serializer.data) 
                return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
            elif request.method == 'DELETE': 
                user.delete() 
                return JsonResponse({'message': 'Usuario borrado satisfactoriamente!'}, status=status.HTTP_204_NO_CONTENT)
        except User.DoesNotExist: 
            return JsonResponse({'message': 'Usurio no existe'}, status=status.HTTP_404_NOT_FOUND) 
 