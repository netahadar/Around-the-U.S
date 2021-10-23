export class Card {
  constructor({
    data,
    user,
    cardSelector,
    handleCardClick,
    handleDeleteCard,
    handleLikes,
  }) {
    this._text = data.name;
    this._image = data.link;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = user;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikes = handleLikes;
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
    this._element.querySelector(".gallery__like-counter").textContent =
      this._likes.length;
    
    //Show updated like status:
    if (this.isliked()) {
      this.updateLikes(this._likes)
    }

    //Show trash icon only for user's card:
    if (this._ownerId !== this._userId) {
      this._element.querySelector(".gallery__trash-button").remove();
    }

    return this._element;
  }

  _setEventListeners() {
    //Create event listener to like button of the new post:
    this._element
      .querySelector(".gallery__like-button")
      .addEventListener("click", () => {
        this._handleLikes(this._cardId);
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

  //Check if card is liked by user:
  isliked() {
    return this._likes.some((user) => {
      return user._id === this._userId;
    });
  }

  // Update likes status:
  updateLikes(newLikes) {
    this._likes = newLikes;

    this._element
        .querySelector(".gallery__like-button")
        .classList.toggle("gallery__like-button_active");
        this._element.querySelector(".gallery__like-counter").textContent =
        this._likes.length;
  }

  //Delete button's handler:
  deleteCard() {
    this._element.remove();
  }
}
