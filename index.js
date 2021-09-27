import {Card} from "./card.js";
import { openPopup, closePopup } from "./handlePopup.js";

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
} from "./constants.js";

//Create a new gallery Item:

function createGalleryPost(name, link, selector) {
  const card = new Card (name, link, selector);
  const galleryElement = card.generateCard()
  
  return galleryElement
}

//Open profile popup's event handler:
function openProfilePopup() {
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

// Create first 6 posts:
initialGalleryItems.forEach((item) => {
  galleryList.append(createGalleryPost(item.name, item.link, ".gallery-post"));
});

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
