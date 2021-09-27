import {showInputError, hideInputError} from "./handleFormErrors.js";

export class FormValidator{
    constructor(initialFormConfig, formSelector){
        this._initialFormConfig = initialFormConfig;
        this._formSelector = formSelector;
    }

    _checkInputValidity(formElement, inputElement, configObject) {
        if (!inputElement.validity.valid) {
          showInputError(
            formElement,
            inputElement,
            inputElement.validationMessage,
            configObject
          );
        } else {
          hideInputError(formElement, inputElement, configObject);
        }
      }
      
      _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      }
      
      _toggleSubmitButtonState(inputList, submitButton, configObject) {
        if (this._hasInvalidInput(inputList)) {
          submitButton.disabled = true;
          submitButton.classList.add(configObject.inactiveButtonClass);
        } else {
          submitButton.disabled = false;
          submitButton.classList.remove(configObject.inactiveButtonClass);
        }
      }
      
      _setFormEventListeners(formElement, configObject) {
        const inputList = Array.from(
          formElement.querySelectorAll(configObject.inputSelector)
        );
        const submitButton = formElement.querySelector(
          configObject.submitButtonSelector
        );
        inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
            this._checkInputValidity(formElement, inputElement, configObject);
            this._toggleSubmitButtonState(inputList, submitButton, configObject);
          });
        });
      }
      
      enableValidation() {
        this._formSelector.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
          this._setFormEventListeners(this._formSelector, this._initialFormConfig);
      }
}

