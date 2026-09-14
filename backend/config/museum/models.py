from django.db import models

class Museum(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    cover_image = models.ImageField(upload_to='museum/')

    def __str__(self):
        return self.name

class Section(models.Model):
    museum = models.ForeignKey(Museum, on_delete=models.CASCADE, related_name='sections')
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='sections/')
    audio = models.FileField(upload_to='audio/')

    def __str__(self):
        return self.title