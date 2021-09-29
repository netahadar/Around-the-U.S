import { fullScreenPhoto, photoPopup, popupPhotoDescription } from "./constants.js";
import { openPopup } from "./handlePopup.js";

export class Card {
  constructor(text, image, cardSelector) {
    this._text = text;
    this._image = image;
    this._cardSelector = cardSelector
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__item")
      .cloneNode(true);
    
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".gallery__photo");
    this._setEventListeners();
    
    this._cardImage.src = this._image;
    this._cardImage.alt = this._text;
    this._element.querySelector(".gallery__text").textContent = this._text;
    
    return this._element;
  }

  _setEventListeners() {
    //Create event listener to like button of the new post:
    this._element.querySelector(".gallery__like-button").addEventListener("click", (evt) => {
      this._likePost(evt);
    });

    // Create event listener to trash button of the new post:
    this._element.querySelector(".gallery__trash-button").addEventListener("click", (evt) => {
        this._deletePost(evt);
    });

    //Create event listener to the image of the new post:
    this._cardImage.addEventListener("click", (evt) => this._openImage(evt));
  }

  // Like button's handler:
  _likePost(evt) {
    evt.preventDefault();
    const button = evt.target;
    button.classList.toggle("gallery__like-button_active");
  }

  //Delete button's handler:
  _deletePost(evt){
    evt.preventDefault();
    let parentItem = evt.currentTarget.closest(".gallery__item");
    parentItem.remove();
    parentItem = null;
  }

  //Full sized photo popup's handler:
  _openImage(evt){
    evt.preventDefault();
    const target = evt.target;
    const link = target.src;
    const name = target.alt;
    openPopup(photoPopup);
    //Set the image to be displayed:
    fullScreenPhoto.setAttribute("src", link);
    fullScreenPhoto.setAttribute("alt", name);
    popupPhotoDescription.textContent = name;
  }
}
