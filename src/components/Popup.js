export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this.open = this.open.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    //Allow user to cLose popups via escape button:
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    //Hide popup:
    this._popupElement.classList.remove("popup_opened");
    //Remove the keydownd "escape" event listener:
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    //Close popup with close button:
    this._popupElement
      .querySelector(".popup__close-button")
      .addEventListener("click", () => {
        this.close();
      });
    //Close popup when user clicks on the overlay:
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
