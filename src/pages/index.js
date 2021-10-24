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
  initialFormConfig,
  avatarForm
} from "../components/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/API.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
import "./index.css";

//Delete card popup:
const deleteCardpopup = new PopupWithSubmit(".popup_type_delete");
//Set event listeners:
deleteCardpopup.setEventListeners();

//PopupWithImage instance:
const imagePopup = new PopupWithImage(".popup_type_photo");

//Create new gallery post:
function createCard(data) {
  const card = new Card({
    data: data,
    user: userId,
    cardSelector: ".gallery-post",
    handleCardClick: (evt) => {
      //Open image popup's handler:
      evt.preventDefault();
      const target = evt.target;
      const link = target.src;
      const name = target.alt;
      imagePopup.open(link, name);
      imagePopup.setEventListeners();
    },
    handleDeleteCard: (cardId) => {
      deleteCardpopup.open();
      deleteCardpopup.setAction(() =>
        api.deleteCard(cardId).then((res) => {
          card.deleteCard();
          deleteCardpopup.close();
        })
      );
    },
    handleLikes: (cardId) => {
      const isLiked = card.isliked();
      if (isLiked) {
        api.dislike(cardId).then((res) => {
          card.updateLikes(res.likes);
        })
      } else {
        api.addLike(cardId).then((res) => {
          card.updateLikes(res.likes);
        });
      }
    },
  });
  //Clone node from template and fill it with post details:
  const galleryElement = card.generateCard();
  return galleryElement;
}

const gallerySection = new Section(
  //Create the new post by itterating over a list of objects:
  (item) => {
    gallerySection.addItem(createCard(item));
  },
  //Selector for the container in which the post will be added:
  ".gallery__list"
);

//UserInfo instance:
const userInfoClass = new UserInfo({
  name: ".profile__name",
  about: ".profile__job-description",
  avatar: ".profile__avatar-container",
});

//Store user ID for varify card ownership:
let userId;

//Set initial user info:
api.getUserInfo().then((res) => {
  userInfoClass.setUserInfo(res);
  userId = res._id;
  userInfoClass.setAvatar(res.avatar);
});

//Create first 6 posts:
api.getInitialCards().then((res) => {
  gallerySection.renderItems(res);
});

// Create profile form:
const editProfileForm = new PopupWithForm(".popup_type_profile", () => {
  //Submit handler:
  //UX:
  editProfileForm.renderSaving(true)
  //Make fetch request:
  api.sendNewData(editProfileForm.getInputValues()).then((res) => {
    //Applay the new inputs to the profile:
    userInfoClass.setUserInfo(res);
  })
  .finally(() =>{
    editProfileForm.renderSaving(false)
  })
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
const addPostForm = new PopupWithForm(".popup_type_post", () => {
  //Submit handler:
  //Ux:
  addPostForm.renderSaving(true)
  //Make fetch request:
  api
    .createNewCard(addPostForm.getInputValues())
    //Applay the new card to the page:
    .then((res) => {
      gallerySection.renderItems(res);
    })
    .finally(() => {
      addPostForm.renderSaving(false)
    })
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

//Create update avatar form:
const editAvatarForm = new PopupWithForm(".popup_type_avatar", () => {
  //Submit handler:
  //UX:
  editAvatarForm.renderSaving(true)
  //Make fetch request:
  api
    .setUserAvatar(editAvatarForm.getInputValues())
    //Applay the new card to the page:
    .then((res) => {
      userInfoClass.setAvatar(res.avatar);
    })
    .finally(() => {
      editAvatarForm.renderSaving(false)
    })
});

//Set event listeners to edit avatar form:
editAvatarForm.setEventListeners();

//Set event listener to edit avatar button:
document.querySelector(".profile__avatar-edit").addEventListener("click", () => {
  avatarFormValidation.resetValidation();
  editAvatarForm.open();
});

//Add form validation:
const avatarFormValidation = new FormValidator(initialFormConfig, avatarForm);
avatarFormValidation.enableValidation();
