from django.db import models
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver
from django.db.models.signals import post_save

# Create your models here.
class User(AbstractUser):
    phone_number = models.CharField(null=True, blank=True, max_length=20)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user")
    profile = models.ImageField(upload_to="user-profile")


# @receiver(post_save, sender=User)
# def create_user_profile(instance, created, **kwargs):
#     print(instance)
#     print(kwargs)
#     print(created)
#     print("Creating user profile.")

# Create your models here.
