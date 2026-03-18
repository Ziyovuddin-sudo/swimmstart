from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Coach
from .serializers import CoachSerializer

class CoachViewSet(viewsets.ModelViewSet):
    queryset = Coach.objects.filter(is_active=True)
    serializer_class = CoachSerializer

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

    @action(detail=False, methods=['get'])
    def archived(self, request):
        archived = Coach.objects.filter(is_active=False)
        serializer = self.get_serializer(archived, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def restore(self, request, pk=None):
        instance = Coach.objects.get(pk=pk)
        instance.is_active = True
        instance.save()
        return Response({'status': 'restored'})
