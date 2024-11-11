import React, { useState, useEffect } from 'react';  
import { FaPlus } from 'react-icons/fa';

const TodoForm = ({ onSave, todoToEdit, onCancelEdit }) => {
  // State variables to manage form inputs and validation errors
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); 
  const [errorTimeout, setErrorTimeout] = useState(null); 
  const [successTimeout, setSuccessTimeout] = useState(null); 
  
  // Effect hook to populate the form with existing todo data if editing an existing todo
  useEffect(() => {
    if (todoToEdit) {
      setTitle(todoToEdit.title); // Set title to existing todo's title
      setDescription(todoToEdit.description); // Set description to existing todo's description
    } else {
      setTitle(''); // Reset title if no todo is being edited
      setDescription(''); // Reset description if no todo is being edited
    }
  }, [todoToEdit]); // Runs whenever `todoToEdit` changes

  // Form validation logic for title and description
  const validateForm = () => {
    const newErrors = {}; // Object to store validation errors
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    setErrors(newErrors); // Set the errors in state

    // Clear errors after 3 seconds
    if (errorTimeout) {
      clearTimeout(errorTimeout); // Clear the previous timeout if any
    }
    const timeout = setTimeout(() => setErrors({}), 3000); // Clear errors after 3 seconds
    setErrorTimeout(timeout);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!validateForm()) return; // Validate form before proceeding

    // Call the onSave callback passed as a prop to save or update the todo
    onSave({ title, description });

     // Set a success message indicating whether a todo was added or updated
    setSuccessMessage(todoToEdit ? `${title} updated successfully!` : `${title} added successfully!`);

    // Clear success message after 3 seconds
    if (successTimeout) {
      clearTimeout(successTimeout); // Clear previous timeout if any
    }
    const successTimeoutId = setTimeout(() => setSuccessMessage(''), 3000); // Reset success message after 3 seconds
    setSuccessTimeout(successTimeoutId);

    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setErrors({});
  };

  // Handler for canceling the edit operation
  const handleCancel = () => {
    setTitle(''); // Clear the title
    setDescription(''); // Clear the description
    setErrors({}); // Clear any existing validation errors
    onCancelEdit(); // Notify the parent to stop editing
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form card">
      {/* Display the appropriate title based on whether we are editing or creating a todo */}
      <h3>{todoToEdit ? 'Edit To-Do' : 'Create a New To-Do'}</h3>
      {/* Title input field */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state on input change
        required
      />
       {/* Display validation error for title if any */}
      {errors.title && <div className="error">{errors.title}</div>}
      
      {/* Description input field */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update description state on input change
      />
      {/* Display validation error for description if any */}
      {errors.description && <div className="error">{errors.description}</div>}

      {/* Display success message if available */}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* Form buttons */}
      <div className="form-buttons">
        <button type="submit">
          <FaPlus /> {todoToEdit ? 'Update' : 'Add'} To-Do
        </button>
        {/* Display cancel button if editing an existing todo */}
        {todoToEdit && (
          <button
            type="button"
            onClick={handleCancel}
            className="cancel-button"
          >
            Cancel
          </button>
        )}
      </div>
      
      
    </form>
  );
};

export default TodoForm;
