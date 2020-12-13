from django.db import models

# DB Model for quizzes
class Quiz(models.Model):
    title = models.CharField(max_length=200, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"[Quiz: {self.title}]"

    class Meta:
        ordering = ["created_at"]

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
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["question", "created_at"]

