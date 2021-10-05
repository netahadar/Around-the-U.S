import Popup from "./Popup";

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

  _setEventListeners() {
    super._setEventListeners();
    this._formElement.addEventListener("submit", () => {
      this._submitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
