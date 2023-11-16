from rest_framework import routers
from django.urls import path,include
from .views import RewardAPIView

router = routers.DefaultRouter()

#router.register(r'Configuration',views.PaisViewSet)                                                                         

urlpatterns = [ 
    path('api/', include(router.urls)),
    path('reward/create', RewardAPIView.as_view()), #crear premio
    path('reward/<int:id>/', RewardAPIView.consult_reward, name='consult_rewards'),
    path('reward/<int:id>/<int:id_usuario>/delete', RewardAPIView.delete_reward, name='delete_rewards'),
    path('rewards/<str:company_id>/', RewardAPIView.get_rewards_by_company, name='company_rewards') #fielapp-113
]

