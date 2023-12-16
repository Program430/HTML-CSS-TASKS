import {createElement} from '../render.js';


function boardComponentTemplate() {
    return (
        `
        <div class = "board-container"> </div>`
      );
}


export class MainComponent {
  getTemplate() {
    return boardComponentTemplate();
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