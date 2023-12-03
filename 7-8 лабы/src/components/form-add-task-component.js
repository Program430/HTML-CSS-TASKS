import {createElement} from '../render.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<section class="section1">
        <div class="section1-div1">
            <h2>Новая задача</h2>
            <div class = "section1-div1-div1">

                <input type="text" placeholder="Название задачи...">
                <button type="button"> + Добавить</button>

            </div> 
        </div>
    </section>`
      );
}


export class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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
