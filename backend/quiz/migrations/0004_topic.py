# Generated by Django 3.0.7 on 2020-12-14 02:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0003_auto_20201213_1607'),
    ]

    operations = [
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(max_length=20)),
                ('quizzes', models.ManyToManyField(to='quiz.Quiz')),
            ],
        ),
    ]
