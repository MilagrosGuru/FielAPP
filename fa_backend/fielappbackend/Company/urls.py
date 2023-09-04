from django.urls import path,include
from DataInit import views
from rest_framework import routers

from .views import CompanyAPIView, CategoryList, CategoryView, CompanyList, CompaniaListCreateView, CompanybyContact, CompanyGetByContact

router = routers.DefaultRouter()

#router.register(r'Configuration',views.PaisViewSet)                                                                         

urlpatterns = [ 
    path('api/', include(router.urls)),
    path('category/create', CategoryView.as_view()),
    path('category/list', CategoryList.as_view()),
    #path('company/', CompaniaListCreateView.as_view(), name='create'),
    path('company/create', CompanyAPIView.as_view()), #crear compañia
    path('company/list', CompanyList.as_view()),

    path('company/<str:user_id>/', CompanybyContact.as_view(), name='document-detail'),
    path('company/contact/<str:user_id>/', CompanyGetByContact.list_company, name='list_company')
    


]



########################################
'''urlpatterns = [ 
    #url('admin/', admin.site.urls),
    path(r'^api/Configuration$', views.PaisList.pais_list),
    path('api/', include(router.urls))
 
]'''