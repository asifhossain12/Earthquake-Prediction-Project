from django.urls import path
from .views import PredictEarthquakeView

urlpatterns = [
    path('predict/', PredictEarthquakeView.as_view(), name='predict-earthquake'),
]
