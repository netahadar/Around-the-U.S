import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._handleSubmit = submitHandler;
    this._formElement = this._popupElement.querySelector(".popup__form");
  }

  getInputValues() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(".popup__form-input")
    );
    const inputValues = {};

    inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  //UX- show while saving data:
  renderSaving(isSaving) {
    if (isSaving) {
      this._formElement.querySelector(
        ".popup__form-submit-button"
      ).textContent = "Saving...";
    } else {
      this._formElement.querySelector(
        ".popup__form-submit-button"
      ).textContent = "Save";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", () => {
      this._handleSubmit();
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
