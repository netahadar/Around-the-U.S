import PopupWithForm from "../components/PopupWithForm.js"

export class PopupWithSubmit extends PopupWithForm {
  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler();
      //this.close();
    });
  }
}
