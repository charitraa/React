from django.db import models

# Create your models here.

class Todo(models.Model):
    description = models.CharField(max_length=200)
    created_at = models.DateField()
