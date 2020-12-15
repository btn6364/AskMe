from rest_framework import serializers
from quiz.models import Quiz, Question, Choice, Topic, QuizTaker

# A JSON Serailizer for a question's topic.
class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ["id", "topic"]

# A JSON Serailizer for a question's multiple choice.
class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ["id", "name", "answer", "is_correct", "created_at"]

# A JSON Serailizer for a quiz's question.
class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = ["id", "content", "created_at", "choices"]

# A JSON Serailizer for a quiz taker.
class QuizTakerSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    class Meta:
        model = QuizTaker
        fields = ["id", "user", "correct_answers", "completed_quiz", "timestamp"]

# A JSON Serailizer for a quiz.
class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)
    topics = TopicSerializer(many=True)
    quiz_takers = QuizTakerSerializer(many=True)

    class Meta:
        model = Quiz
        fields = ["id", "title", "created_at", "questions", "topics", "quiz_takers"]