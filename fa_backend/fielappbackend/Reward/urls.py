from rest_framework import routers
from django.urls import path,include
from .views import RewardAPIView

router = routers.DefaultRouter()

#router.register(r'Configuration',views.PaisViewSet)                                                                         

urlpatterns = [ 
    path('api/', include(router.urls)),
    path('reward/create', RewardAPIView.as_view()), #crear premio
    path('reward/<int:id>/', RewardAPIView.consult_reward, name='consult_rewards'),
]

