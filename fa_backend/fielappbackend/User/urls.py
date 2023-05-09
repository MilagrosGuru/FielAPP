from django.urls import path,include
from DataInit import views
from User import views
from rest_framework import routers
from django.urls import path
from .views import UserView, UserUpdate


router = routers.DefaultRouter()
#router.register(r'users',views.UserCreateView, 'users')

#router.register(r'Configuration',views.PaisViewSet)                                                                         

urlpatterns = [ 
    path('api/', include(router.urls)),
    #path('users/', UserCreateView.as_view(), name='user-create'),
    #path(r'^api/users$', views.UserCreateView.user_list),
    #path(r'^api/users/(?P<pk>[0-9]+)$', user_detail),
    path('user/create', UserView.as_view()),
    path('user/<str:user_id>/', UserUpdate.update_user, name='update_user'),
]

