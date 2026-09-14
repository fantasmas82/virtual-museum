from rest_framework import generics

from .models import Museum, Section

from .serializers import MuseumSerializer, SectionSerializer


class MuseumListView(generics.ListAPIView):

    queryset = Museum.objects.all()

    serializer_class = MuseumSerializer


class SectionListView(generics.ListAPIView):

    queryset = Section.objects.all()

    serializer_class = SectionSerializer


class SectionDetailView(generics.RetrieveAPIView):

    queryset = Section.objects.all()

    serializer_class = SectionSerializer