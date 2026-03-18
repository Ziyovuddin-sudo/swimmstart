import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'swimmstart_backend.settings')
django.setup()

from news.models import News

initial_news = [
    {
        'title': 'Открытие новой зоны релаксации',
        'description': 'Мы рады сообщить об открытии нашего обновленного хаммама и лаунж-зоны. Приходите и окунитесь в атмосферу полного спокойствия.',
        'image': '/gallery-big-15.png'
    },
    {
        'title': 'Расписание на весенний сезон',
        'description': 'Ознакомьтесь с новым графиком групповых занятий и персональных тренировок. Мы подготовили много интересного для вас!',
        'image': '/hero-bg-2.png'
    }
]

def seed():
    if News.objects.exists():
        print("News already exist. Skipping seed.")
        return
    
    for data in initial_news:
        News.objects.create(**data)
    print("News seed completed successfully.")

if __name__ == '__main__':
    seed()
