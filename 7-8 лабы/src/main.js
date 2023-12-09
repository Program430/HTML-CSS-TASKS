import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import {render, RenderPosition} from './render.js';
import { BoardComponent } from './components/board-component.js';
import { TitleTaskComponent } from './components/titleTaskComponent.js';
import { Task } from './components/task-component.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const TaskboardContainer = document.querySelector('.taskboard');
const boardComponent = new BoardComponent();


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(boardComponent, TaskboardContainer);

for(let i = 0;i<4;i++){

    const task =  new TitleTaskComponent();

    render(task, boardComponent.getElement());

    for(let i = 0; i<3;i++){

        render(new Task(), task.getElement());

    }
}











