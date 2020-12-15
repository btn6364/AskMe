# Generated by Django 3.0.7 on 2020-12-15 01:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('quiz', '0007_auto_20201215_0129'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiztaker',
            name='quiz',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quiz_takers', to='quiz.Quiz'),
        ),
        migrations.AlterField(
            model_name='quiztaker',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='quiz_taker', to=settings.AUTH_USER_MODEL),
        ),
    ]
