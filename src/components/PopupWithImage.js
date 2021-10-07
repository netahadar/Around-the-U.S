import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, text) {
    const imageElement = this._popupElement.querySelector(".popup__photo");
    const captionElement = this._popupElement.querySelector(".popup__text");
    imageElement.src = link;
    captionElement.textContent = text;

    super.open();
  }
}
