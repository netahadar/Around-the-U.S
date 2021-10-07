export class FormValidator {
  constructor(initialFormConfig, formElement) {
    this._initialFormConfig = initialFormConfig;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(
      this._initialFormConfig.submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._initialFormConfig.inputSelector)
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(this._initialFormConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._initialFormConfig.errorMessageClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._initialFormConfig.inputErrorClass);
    errorElement.classList.remove(this._initialFormConfig.errorMessageClass);
    errorElement.textContent = "";
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._formElement.reset();
      this._hideInputError(inputElement);
    });
    this._toggleSubmitButtonState();
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleSubmitButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(
        this._initialFormConfig.inactiveButtonClass
      );
    } else {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(
        this._initialFormConfig.inactiveButtonClass
      );
    }
  }

  _setFormEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleSubmitButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setFormEventListeners();
  }
}
