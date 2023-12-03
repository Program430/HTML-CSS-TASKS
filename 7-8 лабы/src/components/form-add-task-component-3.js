import {createElement} from '../render.js';


function createFormAddTaskComponentTemplate3() {
    return (
        `
        <div class = "block3">

                <div class="functional-option">Готово</div>
                <div class="tasks">

                    <div class="task">Позвонить маме</div>
                    <div class="task">Погладить кота</div>

                </div>

            </div>`
      );
}


export class FormAddTaskComponent3 {
  getTemplate() {
    return createFormAddTaskComponentTemplate3();
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