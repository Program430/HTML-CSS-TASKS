const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
  };
  
  
  function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
  
  
    return newElement.firstElementChild;
  }
  
  
  function render(component, container, str, place = RenderPosition.BEFOREEND) {
  container.insertAdjacentElement(place, component.getElement(str));
  }
  
  
  export {RenderPosition, createElement, render};