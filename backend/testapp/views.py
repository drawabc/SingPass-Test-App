from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from myinfo.client import MyInfoClient
from myinfo.security import get_decoded_access_token, get_decrypted_person_data
from . import serializer
import json
# Create your views here.

from django.views.decorators.csrf import csrf_exempt
client = MyInfoClient()
@require_http_methods(["GET", "POST"])
def get_authorised_url(request):
    
    url = client.get_authorise_url(state="blabla")
    return JsonResponse({"url" : url})

@csrf_exempt
@require_http_methods(["POST"])
def get_info(request):
    req = json.loads(request.body)
    if (not req["code"]):
        return JsonResponse({"message": "Code is empty"}, status=404)
    code = req.get("code", "")
    resp = client.get_access_token(code)
    access_token = resp["access_token"]
    print(access_token)
    decoded_access_token = get_decoded_access_token(access_token)
    uinfin = decoded_access_token["sub"]
    resp = client.get_person(uinfin=uinfin, access_token=access_token)
    decrypted = get_decrypted_person_data(resp)
    return JsonResponse(serializer.serialize(decrypted))
