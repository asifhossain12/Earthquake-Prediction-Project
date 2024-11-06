from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import joblib
import os
import logging
from .serializers import PredictionSerializer

logger = logging.getLogger(__name__)

class PredictEarthquakeView(APIView):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        model_path = os.path.join(os.path.dirname(__file__), 'F:/jupyter/Earthquake Prediction Project/backend/earthquake_rf_model.joblib')
        try:
            self.model = joblib.load(model_path)
        except Exception as e:
            logger.error(f"Error loading model: {str(e)}")
            raise

    def post(self, request):
        serializer = PredictionSerializer(data=request.data)
        if serializer.is_valid():
            latitude = serializer.validated_data['latitude']
            longitude = serializer.validated_data['longitude']

            try:
                prediction = self.model.predict([[latitude, longitude]])[0]
                magnitude = prediction[0]  
                depth = prediction[1] if len(prediction) > 1 else None  

                return Response({
                    'magnitude': magnitude,
                    'depth': depth
                })
            except Exception as e:
                logger.error(f"Prediction error: {str(e)}")
                return Response({"error": "Prediction failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
