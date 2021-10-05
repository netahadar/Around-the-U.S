import { Card } from "./Card.js";
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
import PopupWithImage from "./PopupWithImage.js";
import popupWithForm from "./PopupWithForm.js";

//Create new gallery post:
const galleryPost = new Section(
  {
    data: initialGalleryItems,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".gallery-post", (evt) =>
      {
        //Open image popup's handler:
        evt.preventDefault();
        const target = evt.target;
        const link = target.src;
        const name = target.alt;
        const imagePopup = new PopupWithImage(".popup_type_photo");
        imagePopup.open(link, name);
      });
      const galleryElement = card.generateCard();
      //Add the post to the DOM:
      galleryPost.addItem(galleryElement);
    },
  },
  ".gallery__list"
);
//Activate gallery post rendering:
galleryPost.renderItems();

// Create forms instances:
const editProfileForm = new popupWithForm(".popup_type_profile", (data) =>
{
  //Applay new input to the profile:
  profileName.textContent = data.name;
  profileJobTitle.textContent = data.job;
  //close popup after submit:
  editProfileForm.close();
});
editProfileForm.setEventListeners();

//Open profile popup's event handler:
function openProfilePopup() {
  profileFormValidation.resetValidation();
  openPopup(profilePopup);
  //Display current profile information in form fields:
  formNameInput.value = profileName.textContent;
  formJobInput.value = profileJobTitle.textContent;
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

//Add form validation:
const profileFormValidation = new FormValidator(initialFormConfig, profileForm);
profileFormValidation.enableValidation();

const postFormValidation = new FormValidator(initialFormConfig, createPostForm);
postFormValidation.enableValidation();

//Event listeners for edit profile:
editButton.addEventListener("click", editProfileForm.open);
profileEditCloseButton.addEventListener("click", () =>
  closePopup(profilePopup)
);
// profileForm.addEventListener("submit", submitForm);

//Event listeners for adding a new post:
addPostButton.addEventListener("click", () => openPopup(newPostPopup));
postCloseButton.addEventListener("click", () => closePopup(newPostPopup));
createPostForm.addEventListener("submit", submitPost);

//Event listener to photo popup:
//(This popup opening listener is set at the createGalleryItem function)
// closePhotoPopup.addEventListener("click", () => closePopup(photoPopup));

// //Call function that sets event listeners for the popups
// createOverlayEventListener();
