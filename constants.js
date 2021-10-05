// Edit profile popup's objects:
const profilePopup = document.querySelector(".popup_type_profile");
const editButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(".popup__close-button");
const profileForm = document.forms.profile;
const formNameInput = profileForm.elements.name;
const formJobInput = profileForm.elements.job;
const profileName = document.querySelector(".profile__name");
const profileJobTitle = document.querySelector(".profile__job-description");

// Full sized photo popup's objects:
// const photoPopup = document.querySelector(".popup_type_photo");
const fullScreenPhoto = document.querySelector(".popup__photo");
const popupPhotoDescription = document.querySelector(".popup__text");
// const closePhotoPopup = document.querySelector(
//   ".popup__close-button_type_photo"
// );

// New post popup's objects:
const addPostButton = document.querySelector(".profile__add-button");
const newPostPopup = document.querySelector(".popup_type_post");
const postCloseButton = document.querySelector(
  ".popup__close-button_type_post"
);
const createPostForm = document.forms.post;
const postTitle = createPostForm.elements.title;
const postLink = createPostForm.elements.link;
const galleryList = document.querySelector(".gallery__list");
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
  profilePopup,
  editButton,
  profileEditCloseButton,
  profileForm,
  formNameInput,
  formJobInput,
  profileName,
  profileJobTitle,
  fullScreenPhoto,
  popupPhotoDescription,
  addPostButton,
  newPostPopup,
  postCloseButton,
  createPostForm,
  postTitle,
  postLink,
  galleryList,
  galleryTemplate,
  initialGalleryItems,
  initialFormConfig
};
