import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'swimmstart_backend.settings')
django.setup()

from coaches.models import Coach

initial_coaches = [
    {
        'name': 'Марк Андреев',
        'role': 'Старший тренер по плаванию',
        'experience': '12 лет опыта',
        'specialization': 'Спортивное плавание, подготовка к соревнованиям',
        'achievements': 'Мастер спорта международного класса',
        'image': '/coaches/coach1.png'
    },
    {
        'name': 'Елена Соколова',
        'role': 'Фитнес-директор',
        'experience': '10 лет опыта',
        'specialization': 'Персональный тренинг, коррекция фигуры',
        'achievements': 'Сертифицированный коуч (NASM)',
        'image': '/coaches/coach2.png'
    },
    {
        'name': 'Анна Петрова',
        'role': 'Тренер детских групп',
        'experience': '7 лет опыта',
        'specialization': 'Обучение плаванию с нуля, аква-аэробика',
        'achievements': 'Кандидат в мастера спорта',
        'image': '/coaches/coach3.png'
    }
]

def seed():
    if Coach.objects.exists():
        print("Coaches already exist. Skipping seed.")
        return
    
    for data in initial_coaches:
        Coach.objects.create(**data)
    print("Seed completed successfully.")

if __name__ == '__main__':
    seed()
