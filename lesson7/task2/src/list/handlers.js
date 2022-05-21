import { renderTasks } from './renderer.js';
import { getTasksList, createTask, updateTask, deleteTask } from './tasksGateway.js';

export const onCreateClickHandler = () => {
  const taskElem = document.querySelector('.task-input');
  if (!taskElem.value) {
    return;
  }

  const newTask = { text: taskElem.value, done: false };
  createTask(newTask)
    .then(() => getTasksList())
    .then(() => renderTasks());

  taskElem.value = '';
};

// eslint-disable-next-line consistent-return
export const listChangeHandler = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  const isDeleteButton = event.target.classList.contains('list__item-delete-button');

  if (!isCheckbox && !isDeleteButton) {
    return null;
  }

  const tasksList = getTasksList();

  if (isCheckbox) {
    tasksList.then(list =>
      list.map(task => {
        if (task.id === event.target.dataset.id) {
          const done = event.target.checked;
          updateTask(task.id, {
            ...task,
            done,
          })
            .then(() => getTasksList())
            .then(() => renderTasks());
        }

        return task;
      }),
    );
  }

  if (isDeleteButton) {
    tasksList.then(list =>
      list.map(task => {
        if (task.id === event.target.dataset.id) {
          deleteTask(task.id)
            .then(() => getTasksList())
            .then(() => renderTasks());
        }

        return task;
      }),
    );
  }
};

// 1. Prepare data
// 2. Write/change data on server
// 3. Read new data from server
// 4. Update UI based on new data (re-render)
