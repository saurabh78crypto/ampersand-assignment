from rest_framework import serializers # Import serializers module from rest_framework to create a serializer class
from .models import ToDo # Import the ToDo model to use it in the serializer

# Define a serializer class for the ToDo model
class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo  # Specify the model this serializer is based on (ToDo model)
        fields = '__all__' # Include all fields from the ToDo model in the serializer
