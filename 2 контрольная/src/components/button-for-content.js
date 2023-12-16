import {createElement} from '../render.js';


function createtitleTask(str) {
  console.log(str);
 return (`
 <div class="accordion-item">
          <button class="accordion-button">${str}</button> 
          </div>`);

}


export class ButtonComponent{
  getTemplate(str) {
    return createtitleTask(str);
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