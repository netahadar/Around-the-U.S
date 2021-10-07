// Edit profile popup's objects:
const editButton = document.querySelector(".profile__edit-button");
const profileForm = document.forms.profile;
const formNameInput = profileForm.elements.name;
const formJobInput = profileForm.elements.job;

// Full sized photo popup's objects:
const fullScreenPhoto = document.querySelector(".popup__photo");
const popupPhotoDescription = document.querySelector(".popup__text");

// New post popup's objects:
const addPostButton = document.querySelector(".profile__add-button");
const createPostForm = document.forms.post;
const galleryTemplate = document.querySelector(".gallery-post").content;
const initialGalleryItems = [
  {
    name: "Huntington beach",
    link: "./blocks/images/huntington-beach.jpg",
  },
  {
    name: "Vermont",
    link: "./blocks/images/vermont.jpg",
  },
  {
    name: "Mount Rainier Washington",
    link: "./blocks/images/mount-Rainier-washington.jpg",
  },
  {
    name: "San Fransisco",
    link: "./blocks/images/san-francisco.jpg",
  },
  {
    name: "Sedona",
    link: "./blocks/images/sedona.jpg",
  },
  {
    name: "Montauk beach",
    link: "./blocks/images/montauk.jpg",
  },
];

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
  initialGalleryItems,
  initialFormConfig
};
