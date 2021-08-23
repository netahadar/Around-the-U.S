let popupWindow = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let form = document.querySelector(".popup__form");
let formNameInput = document.querySelector(".popup__form-input_field_name");
let formJobInput = document.querySelector(".popup__form-input_field_job");
let profileName = document.querySelector(".profile__name");
let profileJobTitle = document.querySelector(".profile__job-description");

function openPopup() {
    popupWindow.classList.add("popup_opened");
    formNameInput.value = profileName.textContent;
    formJobInput.value = profileJobTitle.textContent; 
}

function closePopup() {
    popupWindow.classList.remove("popup_opened");
}

function formSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = formNameInput.value;
    profileJobTitle.textContent = formJobInput.value;
    closePopup();
  } 

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
form.addEventListener("submit", formSubmit);
