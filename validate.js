//Form validation:
const initialConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__form-submit-button",
    inactiveButtonClass: "popup__form-submit-button_inactive",
    inputErrorClass: "popup__form-input_type_error",
    errorMessageClass: "popup__form-input-error_active"
  }

function showInputError(formElement, inputElement, errorMessage, configObject) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(configObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(configObject.errorMessageClass);
  };
  
  function hideInputError(formElement, inputElement, configObject) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(configObject.inputErrorClass);
    errorElement.classList.remove(configObject.errorMessageClass);
    errorElement.textContent = "";
  };
  
  function checkInputValidity(formElement, inputElement, configObject) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, configObject);
    } else {
      hideInputError(formElement, inputElement, configObject);
    }
  };
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  function toggleSubmitButtonState(inputList, submitButton, configObject) {
    if (hasInvalidInput(inputList)){
        submitButton.disabled = true;
        submitButton.classList.add(configObject.inactiveButtonClass)
    } else {
        submitButton.disabled = false;
        submitButton.classList.remove(configObject.inactiveButtonClass)
    }
  }
  
  function setFormEventListeners(formElement, configObject) {
    const inputList = Array.from(formElement.querySelectorAll(configObject.inputSelector));
    const submitButton = formElement.querySelector(configObject.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, configObject);
        toggleSubmitButtonState(inputList, submitButton, configObject);
      });
    });
  };
  
  function enableValidation(configObject) {
    const formList = Array.from(document.querySelectorAll(configObject.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      setFormEventListeners(formElement, configObject);
    });
  };
  
  enableValidation(initialConfig);

