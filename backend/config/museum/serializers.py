from rest_framework import serializers
from .models import Museum, Section


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = [
            'id',
            'title',
            'description',
            'image',
            'audio',
        ]


class MuseumSerializer(serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)

    class Meta:
        model = Museum
        fields = [
            'id',
            'name',
            'description',
            'cover_image',
            'sections',
        ]