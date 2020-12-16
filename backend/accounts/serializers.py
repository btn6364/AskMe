from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(min_length=8, max_length=20)
    first_name = serializers.CharField(min_length=2, max_length=20)
    last_name = serializers.CharField(min_length=2, max_length=20)
    email = serializers.EmailField(min_length=4, max_length=255)
    password = serializers.CharField(min_length=8, max_length=65, write_only=True)

    class Meta:
        model = User
        fields = ["username", "first_name", "last_name", "email", "password"]

    """
    Overide user validation methods: Each user only has one username and one email.   
    """
    def validate(self, attrs):
        username, email, password = attrs["username"], attrs["email"], attrs["password"]
        errors = []
        if User.objects.filter(username = username).exists():
            errors.append("Username is already in use!")
        if User.objects.filter(email = email).exists():
            errors.append("Email is already in use!")

        # If there's at least one error, return the error response.
        if errors:
            raise serializers.ValidationError ( 
                    {"errors": errors}
            )
        return super().validate(attrs)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)