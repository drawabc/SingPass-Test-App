from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('get_authorised_url', views.get_authorised_url, name='get_authorized_url'),
    path('get_info', views.get_info, name="get_info")
]