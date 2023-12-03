import {createElement} from '../render.js';


function createFormAddTaskComponentTemplate4() {
    return (
        `
        <div class = "block4">

                <div class="functional-option">Корзина</div>
                <div class="tasks">

                    <div class="task">Сходить погулять</div>
                    <div class="task">Прочитать Войну и Мир</div>
                    <button class = "button" type="button"> X Очистить</button>
                    
                </div>

            </div>`
      );
}


export class FormAddTaskComponent4 {
  getTemplate() {
    return createFormAddTaskComponentTemplate4();
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