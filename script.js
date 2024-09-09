const todoInput = document.getElementById('todo-input');

const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

const API_URL = 'http://localhost:5001/api/todos';

const fetchTodos = async () => {
const response = await fetch(API_URL);
const todos = await response.json();
todoList.innerHTML = '';
todos.forEach(todo => { 
    const li = document.createElement('li');
    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    const buttonContainer = document.createElement('div');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => editTodo(todo._id, todo.text));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => deleteTodo(todo._id));
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    li.appendChild(todoText);
    li.appendChild(buttonContainer);
    todoList.appendChild(li);           
    });
};

const addTodo = async () => {
    const todoText = todoInput.value;
    if (todoText) {
        await fetch(API_URL, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: todoText })
        });
        todoInput.value = '';
        fetchTodos();
    }
};

const editTodo = async (id, text) => {
    const updatedText = prompt('Edit todo:', text);
    if (updatedText) {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: updatedText })
        });
        fetchTodos();
    }
};

const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    fetchTodos();
};

addTodoButton.addEventListener('click', addTodo);
fetchTodos();


























//const todoInput = document.getElementById('todo-input');
// const addTodoButton = document.getElementById('add-todo');
// const todoList = document.getElementById('todo-list');

// const API_URL = 'http://localhost:5001/api/todos';

// const fetchTodos = async () => {
//     const response = await fetch(API_URL);
//     const todos = await response.json();
//     todoList.innerHTML = '';
//     todos.forEach(todo => {
//         const li = document.createElement('li');
//         const todoText = document.createElement('span');
//         todoText.textContent = todo.text;
//         const buttonContainer = document.createElement('div');
//         const editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.classList.add('edit');
//         editButton.addEventListener('click', () => editTodo(todo._id, todo.text));
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.classList.add('delete');
//         deleteButton.addEventListener('click', () => deleteTodo(todo._id));
//         buttonContainer.appendChild(editButton);
//         buttonContainer.appendChild(deleteButton);
//         li.appendChild(todoText);
//         li.appendChild(buttonContainer);
//         todoList.appendChild(li);
//     });
// };

// const addTodo = async () => {
//     const todoText = todoInput.value;
//     if (todoText) {
//         await fetch(API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text: todoText })
//         });
//         todoInput.value = '';
//         fetchTodos();
//     }
// };

// const editTodo = async (id, text) => {
//     const updatedText = prompt('Edit todo:', text);
//     if (updatedText) {
//         await fetch(`${API_URL}/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text: updatedText })
//         });
//         fetchTodos();
//     }
// };

// const deleteTodo = async (id) => {
//     await fetch(`${API_URL}/${id}`, {
//         method: 'DELETE'
//     });
//     fetchTodos();
// };

// addTodoButton.addEventListener('click', addTodo);
// fetchTodos();




