from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.core.mail import send_mail
from desireServer.settings import EMAIL_HOST_USER


def sendEmail(request, email):
    send_mail(
        'Greetings',
        'Hello new user',
        EMAIL_HOST_USER,
        [email]
        )
    return JsonResponse({'message':'hello'}, status=200)

def send(request):
    return JsonResponse({'yes':'yes'},status=200)