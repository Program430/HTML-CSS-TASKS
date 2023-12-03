import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import {FormAddTaskComponent1} from './components/form-add-task-component-1.js';
import {FormAddTaskComponent2} from './components/form-add-task-component-2.js';
import {FormAddTaskComponent3} from './components/form-add-task-component-3.js';
import {FormAddTaskComponent4} from './components/form-add-task-component-4.js';
import {render, RenderPosition} from './render.js';


const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const formContainer1 = document.querySelector('.add-task1');
const formContainer2 = document.querySelector('.add-task2');
const formContainer3 = document.querySelector('.add-task3');
const formContainer4 = document.querySelector('.add-task4');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new FormAddTaskComponent1(), formContainer1);
render(new FormAddTaskComponent2(), formContainer2);
render(new FormAddTaskComponent3(), formContainer3);
render(new FormAddTaskComponent4(), formContainer4);

