from quiz.models import Quiz, Topic
from quiz.serializers import QuizSerializer, TopicSerializer
from rest_framework import generics


class QuizList(generics.ListCreateAPIView):
    """
    List all quizzes, or create a new quiz.
    """
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuizDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a quiz instance
    """
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class TopicList(generics.ListCreateAPIView):
    """
    List all available topics.
    """
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

class TopicDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a topic instance
    """
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


