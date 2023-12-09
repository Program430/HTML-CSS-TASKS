import {createElement} from '../render.js';


function createTaskComponent() {
    return (
        `
                    <div class="task">Выпить смузи</div>
            `
      );
}


export class Task {
  getTemplate() {
    return createTaskComponent();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}