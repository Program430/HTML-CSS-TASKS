import {createElement} from '../render.js';


function createFormAddTaskComponentTemplate2() {
    return (
        `
        <div class = "block2">

                <div class = "functional-option">В процессе</div>
                <div class="tasks">

                    <div class="task">Выпить смузи</div>
                    <div class="task">Попить воды</div>

                </div>

            </div>`
      );
}


export class FormAddTaskComponent2 {
  getTemplate() {
    return createFormAddTaskComponentTemplate2();
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