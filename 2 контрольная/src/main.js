
import {render, RenderPosition} from './render.js';
import { MainComponent } from './components/main-container-component.js';
import { ButtonComponent } from './components/button-for-content.js';
import { PContent } from './components/content.js';

const Container = document.querySelector('.accordion');
const mainComponent = new MainComponent();

render(mainComponent, Container);

const Buttons = ["Что такое HTML?","Что такое CSS?","Что такое JavaScript?"];
const Content= ["HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.",
"CSS (/siːɛsɛs/ англ. Cascading Style Sheets «каскадные таблицы стилей») — формальный язык декорирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML).",
"JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык программирования."];

for(let i = 0;i<Buttons.length;i++){

    const button =  new ButtonComponent();

    render(button, mainComponent.getElement(), Buttons[i]);

    render(new PContent(), button.getElement(), Content[i]);

}











