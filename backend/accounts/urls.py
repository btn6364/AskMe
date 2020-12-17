from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import RegistrationView, SignInView
from knox.views import LogoutView, LogoutAllView

urlpatterns = [
    path('register/', RegistrationView.as_view(), name="register"),
    path('login/', SignInView.as_view(), name="login"),
    path('logout/', LogoutView.as_view(), name="logout"),
    path('logoutall/', LogoutAllView.as_view(), name="logout-all"),
]

urlpatterns = format_suffix_patterns(urlpatterns)