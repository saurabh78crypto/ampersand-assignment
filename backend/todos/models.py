from django.db import models # Import Django's models module to define the database model

# Define the ToDo model which represents a to-do item in the database
class ToDo(models.Model):
    # Define the title field, a CharField with a max length of 200 characters
    title = models.CharField(max_length=200)

    # Define the description field, a TextField that can be left empty (blank) or null in the database
    description = models.TextField(blank=True, null=True)

    # Define the completed field, a BooleanField that defaults to False, indicating whether the to-do is complete
    completed = models.BooleanField(default=False)

    # Define the created_at field, a DateTimeField that automatically sets the time when the record is created
    created_at = models.DateTimeField(auto_now_add=True)

    # Define the updated_at field, a DateTimeField that automatically updates to the current time whenever the record is modified
    updated_at = models.DateTimeField(auto_now=True)

    # Define the string representation of the ToDo instance
    def __str__(self):
        return self.title # Returns the title when a ToDo instance is printed
