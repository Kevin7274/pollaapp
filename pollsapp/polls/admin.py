from django.contrib import admin

from .models import Question, Choice
# Register your models here.

class ChoiceInline(admin.TabularInline):
    model = Choice

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    inlines = [ChoiceInline]
