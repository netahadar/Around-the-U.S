
export class Card {
  constructor({text, image, id, cardSelector, handleCardClick, handleDeleteCard}) {
    this._text = text;
    this._image = image;
    this._cardId = id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleDeleteCard = this._handleDeleteCard.bind(this)
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
    this._element
      .querySelector(".gallery__like-button")
      .addEventListener("click", (evt) => {
        this._likePost(evt);
      });

    // Create event listener to trash button of the new post:
    this._element
      .querySelector(".gallery__trash-button")
      .addEventListener("click", () => this._handleDeleteCard(this._cardId));
      
    //Create event listener to the image of the new post:
    this._cardImage.addEventListener("click", (evt) =>
      this._handleCardClick(evt)
    );
  }

  // Like button's handler:
  _likePost(evt) {
    evt.preventDefault();
    const button = evt.target;
    button.classList.toggle("gallery__like-button_active");
  }

  //Delete button's handler:
  deleteCard() {
    this._element.remove();
    // this._element = null;
  }
}
