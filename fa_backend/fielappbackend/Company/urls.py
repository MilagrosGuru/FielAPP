from django.urls import path,include
from DataInit import views
from rest_framework import routers

from .views import CompanyAPIView, CompanyList, CompanybyContact, CompanyGetByContact

router = routers.DefaultRouter()

#router.register(r'Configuration',views.PaisViewSet)                                                                         

urlpatterns = [ 
    path('api/', include(router.urls)),
    #path('company/', CompaniaListCreateView.as_view(), name='create'),
    path('company/create', CompanyAPIView.as_view()), #crear compañia
    path('company/list', CompanyList.as_view()),
    path('company/setup_type_reward/<int:comp_id>/<int:setup_type_reward>', CompanyAPIView.put_setup_type_reward), #fielapp 135
    path('company/<str:user_id>/', CompanybyContact.as_view(), name='document-detail'),
    path('company/contact/<str:user_id>/', CompanyGetByContact.list_company, name='list_company')
    


]



########################################
'''urlpatterns = [ 
    #url('admin/', admin.site.urls),
    path(r'^api/Configuration$', views.PaisList.pais_list),
    path('api/', include(router.urls))
 
]'''