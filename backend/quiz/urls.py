from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from quiz import views

urlpatterns = [
    path('quizzes/', views.QuizList.as_view()),
    path('quizzes/<int:pk>/', views.QuizDetail.as_view()),
    path('quizzes/<int:pk>/questions/', views.QuestionList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)