from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CoachViewSet
from .upload_view import upload_image

router = DefaultRouter()
router.register(r'coaches', CoachViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('upload-image/', upload_image, name='upload-image'),
]

