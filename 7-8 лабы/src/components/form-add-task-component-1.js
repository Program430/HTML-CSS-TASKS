import {createElement} from '../render.js';


function createFormAddTaskComponentTemplate1() {
    return (
        `
        <div class = "block1">

            <div class="functional-option">Бэклог</div>
            <div class="tasks">

                <div class="task">Выучить js</div>
                <div class="task">Выучить React</div>
                <div class="task">Сделать домашку</div>

            </div>

        </div>`
      );
}


export class FormAddTaskComponent1 {
  getTemplate() {
    return createFormAddTaskComponentTemplate1();
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