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
import popupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";

//Create new gallery post:
function createNewPost(data) {
  const galleryPost = new Section(
    {
      //Initial list which contains image's link and name:
      data: data,
      //Create the new post by itterating over data:
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
        //Clone node from template and fill it with post details:
        const galleryElement = card.generateCard();
        //Add the post to the DOM:
        galleryPost.addItem(galleryElement);
      },
    },
    //Selector for the container in which the post will be added:
    ".gallery__list"
  );
  //Activate gallery post rendering:
  galleryPost.renderItems();
}

//Create first 6 posts:
createNewPost(initialGalleryItems);

//UserInfo instance:
const UserInfoClass = new UserInfo({
  name: ".profile__name",
  job: ".profile__job-description",
});

// Create  profile form:
const editProfileForm = new popupWithForm(".popup_type_profile", (data) => {
  //Submit handler:
  //Applay the new inputs to the profile:
  UserInfoClass.setUserInfo(data);
});

//set Event listeners for edit profile popup:
editProfileForm.setEventListeners();

editButton.addEventListener("click", () => {
  //Open form:
  profileFormValidation.resetValidation();
  editProfileForm.open();
  //Display current profile information in form fields:
  const inputs = UserInfoClass.getUserInfo();
  formNameInput.value = inputs.userName;
  formJobInput.value = inputs.userJob;
});

//Add form validation:
const profileFormValidation = new FormValidator(initialFormConfig, profileForm);
profileFormValidation.enableValidation();


//Create add post form:
const addPostForm = new popupWithForm(".popup_type_post", (data) => {
  createNewPost(data);
});
//Set event listener to add post form:
addPostForm.setEventListeners();
addPostButton.addEventListener("click", () => {
  postFormValidation.resetValidation();
  addPostForm.open()});

//Add form validation:
const postFormValidation = new FormValidator(initialFormConfig, createPostForm);
postFormValidation.enableValidation();

