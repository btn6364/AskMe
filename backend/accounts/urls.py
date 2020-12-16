from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import RegistrationView

urlpatterns = [
    path('register/', RegistrationView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)