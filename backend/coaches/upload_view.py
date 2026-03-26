import os
import uuid
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods


@csrf_exempt
@require_http_methods(["POST"])
def upload_image(request):
    if 'image' not in request.FILES:
        return JsonResponse({'error': 'No image file provided'}, status=400)

    image_file = request.FILES['image']

    # Check file type
    allowed_types = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    if image_file.content_type not in allowed_types:
        return JsonResponse({'error': 'Invalid file type'}, status=400)

    # Generate unique filename
    ext = os.path.splitext(image_file.name)[1].lower()
    filename = f"{uuid.uuid4()}{ext}"

    upload_dir = os.path.join(settings.MEDIA_ROOT, 'uploads')
    os.makedirs(upload_dir, exist_ok=True)

    filepath = os.path.join(upload_dir, filename)
    with open(filepath, 'wb+') as dest:
        for chunk in image_file.chunks():
            dest.write(chunk)

    # Return the URL to access the image
    image_url = f"{settings.MEDIA_URL}uploads/{filename}"
    return JsonResponse({'url': image_url})
