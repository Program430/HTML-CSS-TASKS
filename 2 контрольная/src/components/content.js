import {createElement} from '../render.js';


function createTaskComponent(str) {
    return (
        `
        <div class="accordion-content">
        <p>${str}</p>
      </div>
            `
      );
}


export class PContent {
  getTemplate(str) {
    return createTaskComponent(str);
  }


  getElement(str) {
    if (!this.element) {
      this.element = createElement(this.getTemplate(str));
    }

    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}