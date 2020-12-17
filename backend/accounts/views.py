# django imports
from django.contrib.auth import login
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer

# django-rest-knox import
from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView

from .serializers import RegistrationSerializer

class RegistrationView(generics.GenericAPIView):
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = RegistrationSerializer(data = request.data)

        # If the user's data provided is valid, save the user and return the new created user.
        if serializer.is_valid():
            user = serializer.save()
            token = AuthToken.objects.create(user)[1]
            return Response({
                "user": serializer.data, 
                "token": token
            }, status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignInView(KnoxLoginView):
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(SignInView, self).post(request, format=None)