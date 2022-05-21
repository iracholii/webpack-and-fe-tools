import { renderTasks, listElem } from './list/renderer.js';
import { onCreateClickHandler, listChangeHandler } from './list/handlers.js';
import './index.scss';

const createButtonElem = document.querySelector('.create-task-btn');

const initTodoListHandlers = () => {
  listElem.addEventListener('click', listChangeHandler);
  createButtonElem.addEventListener('click', onCreateClickHandler);
};

const onDocumentLoaded = () => {
  renderTasks();
  initTodoListHandlers();
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);

const onStorageChange = () => {
  renderTasks();
};
window.addEventListener('storage', onStorageChange);
