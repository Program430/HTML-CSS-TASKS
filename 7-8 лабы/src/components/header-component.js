import {createElement} from '../render.js';


function createHeaderComponentTemplate() {
    return (
        `<header>

        <h2>Список задач</h2>

    </header>`
      );
}


export class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
