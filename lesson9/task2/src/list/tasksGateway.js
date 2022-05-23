const baseUrl = 'https://627b8319a01c46a8531fa362.mockapi.io/api/v1/tasks';

export const getTasksList = () => fetch(baseUrl).then((response) => response.json());

export const createTask = (newTask) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(newTask),
});

export const updateTask = (taskId, updatedTask) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTask),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
