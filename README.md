# To-Do List Application

This project is a simple To-Do List application built with Django for the backend and React for the frontend. The backend provides a RESTful API for managing to-do items, and the frontend is a React-based UI to interact with the backend.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Run the Application](#run-the-application)

## Technologies Used

- **Backend:** Django, Django REST Framework
- **Frontend:** React, Axios
- **Database:** SQLite (default for development)
- **Styling:** Custom CSS for styling the UI
- **Package Management:** `npm` for frontend dependencies, `pip` for backend dependencies

## Setup Instructions

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```
2. **Create a virtual environment**
    - For Linux/macOS:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

    - For Windows:
    ```bash
    python -m venv venv
    venv\Scripts\activate
    ```
3. **Install dependencies**
```bash
pip install -r requirements.txt
```
4. **Apply database migrations:** This will set up the database tables for the application.
```bash
python manage.py migrate
```
5. **Run the Django development server:**
```bash
python manage.py runserver
```
The backend should now be running at `http://127.0.0.1:8000`.


### Frontend Setup

1. **Navigate to the frontend directory:**
```bash
cd frontend
```
2. **Install frontend dependencies:** Make sure you have Node.js and npm installed. If not, install them from Node.js website.
```bash
npm install
```
3. **Run the React development server:**
```bash
npm start
```

The frontend should now be running at `http://localhost:3000`.

### Run the Application

1. Ensure the backend server (Django) and frontend server (React) are running simultaneously.
2. Open your browser and go to `http://localhost:3000` to interact with the To-Do List application.