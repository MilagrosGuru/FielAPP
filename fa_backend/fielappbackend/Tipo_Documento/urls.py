from django.urls import re_path as url 
from Tipo_Documento import views 

#nuevo para react###########
from django.contrib import admin
# add include to the path
from django.urls import path, include
 
# import views from todo
from Tipo_Documento import views
 
# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers
####################################
 

###nuvo raect###
# create a router object
router = routers.DefaultRouter()
 
# register the router
router.register(r'Tipo_Documento',views.Tipo_DocumentoView, 'Tipo_Documento')
########################################
urlpatterns = [ 
   # url('admin/', admin.site.urls),
    url(r'^api/Tipo_Documento$', views.Tipo_Documento_list),
    url(r'^api/Tipo_Documento/(?P<pk>[0-9]+)$', views.Tipo_Documento_detail),
    url(r'^api/Tipo_Documento/published$', views.Tipo_Documento_list_published),
    url('api/', include(router.urls))
 
]