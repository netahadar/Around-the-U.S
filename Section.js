export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._initialArray = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector); 
      }
    
      renderItems() {
        this._initialArray.forEach(item => {
          this._renderer(item);
        });
      }

      addItem(element) {
          console.log(element, this._container)
          this._container.append(element);
      }
    }    