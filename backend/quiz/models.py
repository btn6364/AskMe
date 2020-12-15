from django.db import models
from django.contrib.auth.models import User

# DB Model for quizzes
class Quiz(models.Model):
    title = models.CharField(max_length=200, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"[Quiz: {self.title}]"

    class Meta:
        ordering = ["created_at"]


# DB Model for the quiz's topic.
class Topic(models.Model):
    topic = models.CharField(max_length=20)
    quizzes = models.ManyToManyField(Quiz, related_name="topics")

    def __str__(self):
        return f"Quiz topic: {self.topic}"


# DB Model for questions.
class Question(models.Model):
    quiz = models.ForeignKey(Quiz, related_name="questions", on_delete=models.CASCADE)
    content = models.CharField(max_length=1000, default="")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"[Question: {self.content}]"

    class Meta:
        ordering = ["created_at"]

# DB Model for choices.
class Choice(models.Model):
    name = models.CharField(max_length=1) # A, B, C, D
    answer = models.CharField(max_length=200, default="")
    question = models.ForeignKey(Question, related_name="choices", on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    

    class Meta:
        ordering = ["question", "created_at"]

# DB Model for the people who took the quiz.
class QuizTaker(models.Model):
    user = models.OneToOneField(User, related_name="quiz_taker", on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, related_name="quiz_takers", on_delete=models.CASCADE)
    correct_answers = models.IntegerField(default=0)
    completed_quiz = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"[Quiz Taker: {self.user.username}]"

    class Meta:
        ordering = ["timestamp"]


