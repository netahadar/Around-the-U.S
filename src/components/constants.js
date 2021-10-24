//Edit avatar form constants:
const avatarForm = document.forms.avatar;

// Edit profile popup's constants:
const editButton = document.querySelector(".profile__edit-button");
const profileForm = document.forms.profile;
const formNameInput = profileForm.elements.name;
const formJobInput = profileForm.elements.about;

// Full sized photo popup's constants:
const fullScreenPhoto = document.querySelector(".popup__photo");
const popupPhotoDescription = document.querySelector(".popup__text");

// New post popup's constants:
const addPostButton = document.querySelector(".profile__add-button");
const createPostForm = document.forms.post;
const galleryTemplate = document.querySelector(".gallery-post").content;

const initialFormConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-submit-button",
  inactiveButtonClass: "popup__form-submit-button_inactive",
  inputErrorClass: "popup__form-input_type_error",
  errorMessageClass: "popup__form-input-error_active",
};

export {
  editButton,
  profileForm,
  formNameInput,
  formJobInput,
  fullScreenPhoto,
  popupPhotoDescription,
  addPostButton,
  createPostForm,
  galleryTemplate,
  initialFormConfig,
  avatarForm
};
