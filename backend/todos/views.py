from rest_framework import viewsets # Import the viewsets module from rest_framework
from rest_framework.response import Response # Import Response to return API responses
from rest_framework import status # Import status codes to return appropriate HTTP status codes
from .models import ToDo  # Import the ToDo model from the current app
from .serializers import ToDoSerializer # Import the ToDoSerializer to handle data serialization

# Define the ToDoViewSet class, which provides CRUD operations for the ToDo model
class ToDoViewSet(viewsets.ModelViewSet):
    # Define the queryset to retrieve all ToDo objects, ordered by the 'created_at' field in descending order
    queryset = ToDo.objects.all().order_by('-created_at')

    # Specify the serializer class to be used for serializing and deserializing ToDo objects
    serializer_class = ToDoSerializer

    # Additional actions like 'create', 'update', 'delete' are automatically handled by ModelViewSet
    # The 'ModelViewSet' provides implementations for list, retrieve, create, update, and delete actions.
