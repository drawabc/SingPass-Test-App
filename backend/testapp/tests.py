from django.test import Client, TestCase
from django.urls import reverse
from myinfo.client import MyInfoClient

# Create your tests here.
class testAppTest(TestCase):
    def test_get_authorised_url(self):
        client = Client()
        response = client.get(reverse("testapp:get_authorised_url"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["url"], MyInfoClient.get_authorise_url(state="blabla"))

    def test_get_info(self):
        client = Client()
        response = client.post(reverse("testapp:get_info"), {"code": "124"})
        self.assertEqual(response.status_code, 404)