import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._formElement = this._popupElement.querySelector(".popup__form");
  }

  _getInputValues() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(".popup__form-input")
    );
    const inputValues = {};

    inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", () => {
      this._submitHandler();
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
