import React from 'react';

// TodoList component responsible for displaying the list of to-do items
const TodoList = ({ todos, onEdit, onDelete, onToggleComplete }) => {
     
  return (
    <div className="todo-list">
      {/* Map over the todos array and render each todo item */}
      {todos.map(todo => (
        <div key={todo.id} className={`todo-item card ${todo.completed ? 'completed' : ''}`}>
          <div className="todo-content">
            {/* Display the title and description of the to-do */}
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
          </div>
          {/* Actions for each to-do item */}
          <div className="todo-actions">
            {/* Button to toggle the completion state of the todo */}
            <button onClick={() => onToggleComplete(todo.id, !todo.completed)}>
              {/* Toggle the icon and label based on the completion state */}
              <i className={`fas ${todo.completed ? 'fa-undo' : 'fa-check'}`} aria-hidden="true"></i>  
              <span>{todo.completed ? 'Undo' : 'Complete'}</span>
            </button>

            {/* Button to trigger the editing of the todo */}
            <button onClick={() => onEdit(todo)}>
                <i className="fas fa-edit" aria-hidden="true"></i>
                <span>Edit</span>
            </button>

            {/* Button to delete the todo */}
            <button onClick={() => onDelete(todo.id)} style={{ backgroundColor: '#e57373' }}>
              <i className="fas fa-trash-alt" aria-hidden="true"></i>
              <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
