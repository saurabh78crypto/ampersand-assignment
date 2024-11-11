import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/api'; // Import API functions
import TodoList from './components/TodoList'; // Import TodoList component to display todos
import TodoForm from './components/TodoForm'; // Import TodoForm component for adding/editing todos
import './App.css'; // Import styling

const App = () => {
  // State to manage the list of todos and the current todo being edited
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

  // Fetch todos from the API on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos(); // Get todos from API
      setTodos(todos); // Set todos in state
    };
    fetchTodos(); // Fetch todos when component mounts
  }, []); // Empty dependency array means it runs only once after initial render

  // Handle saving a new or updated todo
  const handleSaveTodo = async (todo) => {
    if (todoToEdit) {
      // If editing an existing todo, update it
      const updatedTodo = await updateTodo(todoToEdit.id, todo);
      setTodos(todos.map(t => (t.id === updatedTodo.id ? updatedTodo : t))); // Update the todo in the list
      setTodoToEdit(null); // Reset the edit state
    } else {
      // If creating a new todo, add it to the list
      const newTodo = await createTodo(todo);
      setTodos([...todos, newTodo]); // Add the new todo to the list
    }
  };

  // Handle deleting a todo
  const handleDeleteTodo = async (id) => {
    await deleteTodo(id); // Call API to delete the todo
    setTodos(todos.filter(todo => todo.id !== id)); // Remove the deleted todo from the list
  };

  // Handle toggling the completion status of a todo
  const handleToggleComplete = async (id, completed) => {
    const todoToUpdate = todos.find(todo => todo.id === id); // Find the todo to update
    const updatedTodo = { ...todoToUpdate, completed }; // Update the completion status

    try {  
      const response = await updateTodo(id, updatedTodo); // Update todo in API
      setTodos(todos.map(t => (t.id === response.id ? response : t))); // Update the todo in the local list
    } catch (error) {
      console.error('Error toggling completion status:', error); // Handle errors if any
    }
  };

  // Handle editing a todo (set it to the current todoToEdit)
  const handleEditTodo = (todo) => {
    setTodoToEdit(todo); // Set the todo to edit state
  };

  // Handle canceling the edit operation
  const handleCancelEdit = () => {
    setTodoToEdit(null); // Reset the edit state
  };

  // Separate todos into pending and completed lists
  const pendingTodos = todos.filter(todo => !todo.completed); // Filter out pending todos
  const completedTodos = todos.filter(todo => todo.completed); // Filter out completed todos

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="todo-container">
        {/* To-Do Creation Form (Card) */}
        <div className="todo-card">
          <TodoForm
            onSave={handleSaveTodo} // Pass save function to TodoForm
            todoToEdit={todoToEdit} // Pass the todo being edited to TodoForm
            onCancelEdit={handleCancelEdit} // Pass cancel function to stop editing
          />
        </div>

        {/* Display Pending and Completed Todos in separate columns */}
        <div className="todo-columns">
          <div className="todo-column">
            <h3>Pending</h3>
            {/* If there are no pending todos, show a message */}
            {pendingTodos.length === 0 ? (
               <p className="no-tasks-message">No tasks available</p>
            ) : (
              <TodoList
                todos={pendingTodos} // Pass the pending todos to TodoList component
                onEdit={handleEditTodo} // Pass edit function to TodoList
                onDelete={handleDeleteTodo} // Pass delete function to TodoList
                onToggleComplete={handleToggleComplete} // Pass toggle completion function to TodoList
              />
            )}
          </div>
          <div className="todo-column">
            <h3>Completed</h3>
            {/* If there are no completed todos, show a message */}
            {completedTodos.length === 0 ? (
               <p className="no-tasks-message">No tasks available</p>
            ) : (
            <TodoList
              todos={completedTodos} // Pass the completed todos to TodoList component
              onEdit={handleEditTodo} // Pass edit function to TodoList
              onDelete={handleDeleteTodo}  // Pass delete function to TodoList
              onToggleComplete={handleToggleComplete} // Pass toggle completion function to TodoList
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
