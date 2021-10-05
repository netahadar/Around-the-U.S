import { Card } from "./Card.js";
import { openPopup, closePopup } from "./handlePopup.js";
import { FormValidator } from "./FormValidator.js";
import Section from "./section.js";

import {
  profilePopup,
  editButton,
  profileEditCloseButton,
  profileForm,
  formNameInput,
  formJobInput,
  profileName,
  profileJobTitle,
  photoPopup,
  closePhotoPopup,
  addPostButton,
  newPostPopup,
  postCloseButton,
  createPostForm,
  postTitle,
  postLink,
  galleryList,
  initialGalleryItems,
  initialFormConfig,
} from "./constants.js";

const galleryPost = new Section(
  {
    data: initialGalleryItems,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".gallery-post");
      const galleryElement = card.generateCard();
      galleryPost.addItem(galleryElement);
    },
  },
  ".gallery__list"
);

galleryPost.renderItems();


//Open profile popup's event handler:
function openProfilePopup() {
  profileFormValidation.resetValidation();
  openPopup(profilePopup);
  //Display current profile information in form fields:
  formNameInput.value = profileName.textContent;
  formJobInput.value = profileJobTitle.textContent;
}

// Submit edit profile form's handler:
function submitForm(evt) {
  evt.preventDefault();
  //Applay new input to the profile:
  profileName.textContent = formNameInput.value;
  profileJobTitle.textContent = formJobInput.value;
  //close popup after submit:
  closePopup(profilePopup);
}

// Submit new post form's handler:
function submitPost(evt) {
  evt.preventDefault();

  //create new post:
  const name = postTitle.value;
  const link = postLink.value;
  galleryList.prepend(createGalleryPost(name, link, ".gallery-post"));
  //close popup:
  postFormValidation.resetValidation();
  closePopup(newPostPopup);
}

//Create event listener for closing popups by clicking the overlay:
function createOverlayEventListener() {
  const popupList = Array.from(document.querySelectorAll(".popup"));
  popupList.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        closePopup(popup);
      }
    });
  });
}

//Add form validation:
const profileFormValidation = new FormValidator(initialFormConfig, profileForm);
profileFormValidation.enableValidation();

const postFormValidation = new FormValidator(initialFormConfig, createPostForm);
postFormValidation.enableValidation();

//Event listeners for edit profile:
editButton.addEventListener("click", openProfilePopup);
profileEditCloseButton.addEventListener("click", () =>
  closePopup(profilePopup)
);
profileForm.addEventListener("submit", submitForm);

//Event listeners for adding a new post:
addPostButton.addEventListener("click", () => openPopup(newPostPopup));
postCloseButton.addEventListener("click", () => closePopup(newPostPopup));
createPostForm.addEventListener("submit", submitPost);

//Event listener to photo popup:
//(This popup opening listener is set at the createGalleryItem function)
closePhotoPopup.addEventListener("click", () => closePopup(photoPopup));

//Call function that sets event listeners for the popups
createOverlayEventListener();
