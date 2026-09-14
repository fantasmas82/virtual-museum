from django.urls import path

from .views import MuseumListView, SectionListView, SectionDetailView


urlpatterns = [
    path('museums/', MuseumListView.as_view()),
    path('sections/', SectionListView.as_view()),
    path('sections/<int:pk>/', SectionDetailView.as_view()),
]