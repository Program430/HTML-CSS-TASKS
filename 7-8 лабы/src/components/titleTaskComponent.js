import {createElement} from '../render.js';


function createtitleTask() {

 return (`
 <div class = "tasks">
 <div class = "titleTask">
  Бэклок
 </div>
  </div>`);

}


export class TitleTaskComponent{
  getTemplate() {
    return createtitleTask();
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