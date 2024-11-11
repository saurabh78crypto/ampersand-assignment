from django.urls import path, include # Import the path and include functions from django.urls
from rest_framework.routers import DefaultRouter # Import DefaultRouter for automatic URL routing for ViewSets
from .views import ToDoViewSet # Import the ToDoViewSet from the views module

# Initialize the DefaultRouter instance
router = DefaultRouter()

# Register the ToDoViewSet with the router under the 'todos' URL path
# This automatically creates routes for CRUD operations on ToDo objects
router.register(r'todos', ToDoViewSet)

# Define URL patterns to include the router's URLs
# This ensures that the registered ViewSet's URLs are included in the app's URL configuration
urlpatterns = [
    path('', include(router.urls)),  # Include all the router-generated URLs
]
