import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  editButton,
  profileForm,
  formNameInput,
  formJobInput,
  addPostButton,
  createPostForm,
  initialGalleryItems,
  initialFormConfig,
} from "../components/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";

//PopupWithImage instance:
const imagePopup = new PopupWithImage(".popup_type_photo");

//Create new gallery post:
function createCard(data) {
  const card = new Card(data.name, data.link, ".gallery-post", (evt) => {
    //Open image popup's handler:
    evt.preventDefault();
    const target = evt.target;
    const link = target.src;
    const name = target.alt;
    imagePopup.open(link, name);
    imagePopup.setEventListeners();
  });
  //Clone node from template and fill it with post details:
  const galleryElement = card.generateCard();
  return galleryElement;
}

const gallerySection = new Section(
  {
    //Initial list which contains image's link and name:
    data: initialGalleryItems,
    //Create the new post by itterating over data:
    renderer: (item) => {
      gallerySection.addItem(createCard(item));
    },
  },
  //Selector for the container in which the post will be added:
  ".gallery__list"
);

//Create first 6 posts:
gallerySection.renderItems();

//UserInfo instance:
const userInfoClass = new UserInfo({
  name: ".profile__name",
  job: ".profile__job-description",
});

// Create  profile form:
const editProfileForm = new PopupWithForm(".popup_type_profile", (data) => {
  //Submit handler:
  //Applay the new inputs to the profile:
  userInfoClass.setUserInfo(data);
});

//set Event listeners for edit profile popup:
editProfileForm.setEventListeners();

editButton.addEventListener("click", () => {
  //Open form:
  profileFormValidation.resetValidation();
  editProfileForm.open();
  //Display current profile information in form fields:
  const inputs = userInfoClass.getUserInfo();
  formNameInput.value = inputs.userName;
  formJobInput.value = inputs.userJob;
});

//Add form validation:
const profileFormValidation = new FormValidator(initialFormConfig, profileForm);
profileFormValidation.enableValidation();

//Create add post form:
//The "data" parameter is a returned object from a privet method in the class
const addPostForm = new PopupWithForm(".popup_type_post", (data) => {
  gallerySection.addItem(createCard(data));
});
//Set event listener to add post form:
addPostForm.setEventListeners();
addPostButton.addEventListener("click", () => {
  postFormValidation.resetValidation();
  addPostForm.open();
});

//Add form validation:
const postFormValidation = new FormValidator(initialFormConfig, createPostForm);
postFormValidation.enableValidation();
