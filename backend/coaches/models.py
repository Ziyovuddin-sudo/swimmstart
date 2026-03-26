from django.db import models
from django.utils import timezone

class Coach(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    experience = models.CharField(max_length=50)
    specialization = models.TextField()
    achievements = models.TextField()
    image = models.TextField(blank=True, default='') # URL, path, or base64 image data
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Coaches"
