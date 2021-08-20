let popupWindow = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let submitButton = document.querySelector(".popup__form-submit-button");
let formNameInput = document.querySelector(".popup__form-input_name");
let formJobInput = document.querySelector(".popup__form-input_job");
let profileName = document.querySelector(".profile__name");
let profileJobTitle = document.querySelector(".profile__job-description");

function openPopup() {
    popupWindow.classList.add("popup_opened");
}

function closePopup() {
    popupWindow.classList.remove("popup_opened");
}

function formSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = formNameInput.value;
    profileJobTitle.textContent = formJobInput.value;
  } 

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
submitButton.addEventListener("click", formSubmit);

formNameInput.value = profileName.textContent;
formJobInput.value = profileJobTitle.textContent; 