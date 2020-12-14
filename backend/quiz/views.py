from quiz.models import Quiz, Question, Choice
from quiz.serializers import QuizSerializer, QuestionSerializer
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

class QuestionList(generics.ListCreateAPIView):
    """
    List all the questions, for a specific quiz.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
