from django.urls import path,include
from DataInit import views
from rest_framework import routers

from .views import CategoryList, CategoryView, CompanyList, CompaniaListCreateView

router = routers.DefaultRouter()

#router.register(r'Configuration',views.PaisViewSet)                                                                         

urlpatterns = [ 
    path('api/', include(router.urls)),
    path('category/create', CategoryView.as_view()),
    path('category/list', CategoryList.as_view()),
    path('company/', CompaniaListCreateView.as_view(), name='create'),
    #path('company/create', CompanyView.as_view()),
    path('company/list', CompanyList.as_view())

]

########################################
'''urlpatterns = [ 
    #url('admin/', admin.site.urls),
    path(r'^api/Configuration$', views.PaisList.pais_list),
    path('api/', include(router.urls))
 
]'''