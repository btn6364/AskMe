from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import UserSerializer


class RegistrationView(generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request):
        serializer = UserSerializer(data = request.data)

        # If the user's data provided is valid, save the user and return the new created user.
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)