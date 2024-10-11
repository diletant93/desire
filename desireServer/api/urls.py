from django.urls import path
from . import views

urlpatterns=[
    path('sendemail/<str:email>/', views.sendEmail),
    path('send/', views.send)
]