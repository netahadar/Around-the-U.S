import Popup from "./Popup";

export default class PopupWithImage extends Popup {

    open( link, text) {
        const imageElement = this._popupElement.qerySelector(".gallery__photo");
        const captionElement = this._popupElement.querySelector(".gallery__text");

        imageElement.src = link;
        captionElement.textContent = text;

        super.open();
    }
}