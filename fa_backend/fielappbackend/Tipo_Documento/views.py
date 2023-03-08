from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from Tipo_Documento.models import Tipo_Documento
from Tipo_Documento.serializers import Tipo_DocumentoSerializer
from rest_framework.decorators import api_view
# import view sets from the REST framework
from rest_framework import viewsets
# import the TodoSerializer from the serializer file
from .serializers import Tipo_DocumentoSerializer
 

# create a class for the Todo model viewsets
class Tipo_DocumentoView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = Tipo_DocumentoSerializer
 
    # define a variable and populate it
    # with the Todo list objects
    queryset = Tipo_Documento.objects.all()


@api_view(['GET', 'POST', 'DELETE'])
def Tipo_Documento_list(request):
    # GET list of tipo_Documento, POST a new tutorial, DELETE all tipo_Documento
    if request.method == 'GET':
        tipo_Documento = Tipo_Documento.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            tipo_Documento = tipo_Documento.filter(title__icontains=title)
        
        tipo_Documento_serializer = Tipo_DocumentoSerializer(tipo_Documento, many=True)
        return JsonResponse(tipo_Documento_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        tipo_Documento_data = JSONParser().parse(request)
        tipo_Documento_serializer = Tipo_DocumentoSerializer(data=tipo_Documento_data)
        if tipo_Documento_serializer.is_valid():
            tipo_Documento_serializer.save()
            return JsonResponse(tipo_Documento_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(tipo_Documento_serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def Tipo_Documento_detail(request, pk):
    # find tutorial by pk (id)
    try: 
        tipo_Documento = Tipo_Documento.objects.get(pk=pk) 
        if request.method == 'GET': 
            tipo_Documento_serializer = Tipo_DocumentoSerializer(tipo_Documento) 
            return JsonResponse(tipo_Documento_serializer.data)
        elif request.method == 'PUT': 
            tipo_Documento_data = JSONParser().parse(request) 
            tipo_Documento_serializer = Tipo_DocumentoSerializer(tipo_Documento, data=tipo_Documento_data) 
            if tipo_Documento_serializer.is_valid(): 
                tipo_Documento_serializer.save() 
                return JsonResponse(tipo_Documento_serializer.data) 
            return JsonResponse(tipo_Documento_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
        elif request.method == 'DELETE': 
            tipo_Documento.delete() 
            return JsonResponse({'message': 'Tipo Documento fue eliminado!'}, status=status.HTTP_204_NO_CONTENT)
    except tipo_Documento.DoesNotExist: 
        return JsonResponse({'message': 'El Tipo de Documento no exite'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE tutorial
    
@api_view(['GET', 'PUT', 'DELETE'])
def Tipo_Documento_detail(request):
    if request.method == 'DELETE':
        count = Tipo_Documento.objects.all().delete()
        return JsonResponse({'message': '{} Tipo de Documento fue eliminado!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def Tipo_Documento_list_published(request):
    tipo_Documento = Tipo_Documento.objects.filter(published=True)
        
    if request.method == 'GET': 
        tipo_Documento_serializer = Tipo_DocumentoSerializer(tipo_Documento, many=True)
        return JsonResponse(tipo_Documento_serializer.data, safe=False)


# Create your views here.
