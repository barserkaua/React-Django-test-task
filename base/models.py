from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.

Group.add_to_class('description', models.TextField(null=True, blank=True))


