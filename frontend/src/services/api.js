import axios from 'axios';

// Base URL for the API endpoint
const API_BASE_URL = 'http://127.0.0.1:8000/api/todos/';

// Get all todos from the server
export const getTodos = async () => {
    try {
        // Make a GET request to the API to retrieve all todos  
        const response = await axios.get(API_BASE_URL);
        return response.data; // Return the data (list of todos) from the response       
    } catch (error) {
        // Handle any errors that occur during the update
        console.error("Error updating todo:", error);
        throw error; // Throw the error to be handled by the caller
    }
};

// Create a new todo
export const createTodo = async (todo) => {
    try {
        // Make a POST request to the API to create a new todo
        const response = await axios.post(API_BASE_URL, todo);
        return response.data; // Return the newly created todo data from the response
    } catch (error) {
        // Handle any errors that occur during the update
        console.error("Error updating todo:", error);
        throw error; // Throw the error to be handled by the caller
    }
};

// Update an existing todo by its id
export const updateTodo = async (id, updatedTodo) => {
    try {
        // Make a PUT request to the API to update the todo with the given id
        const response = await axios.put(`${API_BASE_URL}${id}/`, updatedTodo);
        return response.data; // Return the updated todo data from the response
      } catch (error) {
        // Handle any errors that occur during the update
        console.error("Error updating todo:", error);
        throw error; // Throw the error to be handled by the caller
      }
};

// Delete a todo by its id
export const deleteTodo = async (id) => {
    try {
        // Make a DELETE request to the API to remove the todo with the given id
        await axios.delete(`${API_BASE_URL}${id}/`);
    } catch (error) {
        // Handle any errors that occur during the update
        console.error("Error updating todo:", error);
        throw error; // Throw the error to be handled by the caller
    }
};
