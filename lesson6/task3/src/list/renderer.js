import { getTasksList } from './tasksGateway.js';
import './list.scss';

export const listElem = document.querySelector('.list');

export const renderTasks = () => {
  listElem.innerHTML = '';

  const createTaskElem = (element) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', `${element.id}`);
    checkboxElem.checked = element.done;
    checkboxElem.classList.add('list__item-checkbox');
    if (element.done) {
      listItemElem.classList.add('list__item_done');
    }

    const textElem = document.createElement('span');
    textElem.classList.add('list__item-text');
    textElem.textContent = element.text;

    const deleteButtonElem = document.createElement('button');
    deleteButtonElem.classList.add('list__item-delete-button');
    deleteButtonElem.setAttribute('data-id', `${element.id}`);
    deleteButtonElem.textContent = '+';

    listItemElem.append(checkboxElem, textElem, deleteButtonElem);

    return listItemElem;
  };

  const tasksList = getTasksList();
  tasksList
    .then((tasks) => tasks.sort((a, b) => a.done - b.done).map(createTaskElem))
    .then((elem) => {
      listElem.append(...elem);
    });
};
