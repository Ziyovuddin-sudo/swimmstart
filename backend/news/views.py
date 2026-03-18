from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import News
from .serializers import NewsSerializer

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = NewsSerializer

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

    @action(detail=False, methods=['get'])
    def archived(self, request):
        archived = News.objects.filter(is_active=False)
        serializer = self.get_serializer(archived, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def restore(self, request, pk=None):
        instance = News.objects.get(pk=pk)
        instance.is_active = True
        instance.save()
        return Response({'status': 'restored'})
