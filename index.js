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
import UserInfo from "./UserInfo.js";

//Create new gallery post:
const galleryPost = new Section(
  {
    data: initialGalleryItems,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".gallery-post", (evt) => {
        //Open image popup's handler:
        evt.preventDefault();
        const target = evt.target;
        const link = target.src;
        const name = target.alt;
        const imagePopup = new PopupWithImage(".popup_type_photo");
        imagePopup.open(link, name);
        imagePopup.setEventListeners();
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


//UserInfo instance:
const UserInfoClass = new UserInfo({
  name: ".profile__name",
  job: ".profile__job-description",
});


// Create  profile form's instance:
const editProfileForm = new popupWithForm(
  ".popup_type_profile",
  (data) => {
    //Submit handler:
    //Applay the new inputs to the profile:
    UserInfoClass.setUserInfo(data);
  },
  () => {
    //Open form's handler:
    profileFormValidation.resetValidation();
    //Display current profile information in form fields:
    const inputs = UserInfoClass.getUserInfo();
    formNameInput.value = inputs.userName;
    formJobInput.value = inputs.userJob;
  }
);
//set Event listeners for edit profile popup:
editButton.addEventListener("click", editProfileForm.open);
editProfileForm.setEventListeners();

//Add form validation:
const profileFormValidation = new FormValidator(initialFormConfig, profileForm);
profileFormValidation.enableValidation();

const postFormValidation = new FormValidator(initialFormConfig, createPostForm);
postFormValidation.enableValidation();



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




//Event listeners for adding a new post:
// addPostButton.addEventListener("click", () => openPopup(newPostPopup));
// postCloseButton.addEventListener("click", () => closePopup(newPostPopup));
// createPostForm.addEventListener("submit", submitPost);

