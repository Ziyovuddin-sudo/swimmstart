from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CoachViewSet

router = DefaultRouter()
router.register(r'coaches', CoachViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
