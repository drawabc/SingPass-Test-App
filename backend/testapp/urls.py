from django.urls import path

from . import views

app_name="testapp"
urlpatterns = [
    # ex: /polls/
    path('get_authorised_url', views.get_authorised_url, name='get_authorised_url'),
    path('get_info', views.get_info, name="get_info")
]