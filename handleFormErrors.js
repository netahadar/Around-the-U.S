export function showInputError(formElement, inputElement, errorMessage, configObject) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(configObject.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configObject.errorMessageClass);
}

export function hideInputError(formElement, inputElement, configObject) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(configObject.inputErrorClass);
  errorElement.classList.remove(configObject.errorMessageClass);
  errorElement.textContent = "";
}

export function resetErrorMessage(popupWindow, configObject) {
  const form = popupWindow.querySelector(configObject.formSelector);
  const inputList = Array.from(
    popupWindow.querySelectorAll(configObject.inputSelector)
  );
  inputList.forEach((input) => {
    form.reset();
    hideInputError(form, input, configObject);
  });
}
