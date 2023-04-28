from django.urls import path,include
from DataInit import views
from rest_framework import routers

from .views import CountryView, CountryStateList, DocumentTypeView, DocumentTypeList,GenderView, GenderList, DepartmentList, DocumentTypeViewId, GenderViewId, DepartmentViewId

router = routers.DefaultRouter()

#router.register(r'Configuration',views.PaisViewSet)                                                                         

urlpatterns = [ 
    path('api/', include(router.urls)),
    path('country/create', CountryView.as_view()),
    path('country/list', CountryStateList.as_view()),
    path('department/list', DepartmentList.as_view()),
    path('documentType/create', DocumentTypeView.as_view()),
    path('documentType/list', DocumentTypeList.as_view()),
    path('gender/create', GenderView.as_view()),
    path('gender/list', GenderList.as_view()),

    #Busquedas por id
    path('documentType/<str:document_id>/', DocumentTypeViewId.as_view(), name='document-detail'),
    path('gender/<str:gender_id>/', GenderViewId.as_view(), name='gender-detail'),
    path('department/<str:department_id>/', DepartmentViewId.as_view(), name='department-detail'),

]

########################################
'''urlpatterns = [ 
    #url('admin/', admin.site.urls),
    path(r'^api/Configuration$', views.PaisList.pais_list),
    path('api/', include(router.urls))
 
]'''