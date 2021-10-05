export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose() {
        if (evt.key === "Escape") {
            this. close();    
        }
    }

    open() {
        this._popupElement.classList.add("popup_opened");
        //Allow user to cLose popups via escape button:
        document.addEventListener("keydown", this._handleEscClose());    
    }

    close() {
        //Hide popup:
        this._popupElement.classList.remove("popup_opened");
        //Remove the keydownd "escape" event listener:
        document.removeEventListener("keydown", this._handleEscClose());
    }

    _setEventListeners() {
        this._popupElement.querySelector(".popup__close-button").addEventListener('click', () => {this.close()});
        //add listener to overlay
    }
}