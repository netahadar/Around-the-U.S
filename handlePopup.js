// Open popup's event handler:
export function openPopup(popupWindow) {
    popupWindow.classList.add("popup_opened");
    //Allow user to cLose popups via escape button:
    document.addEventListener("keydown", closePopupViaEsc);
  }
 
//Close popup's event handler:
export function closePopup(popupWindow) {
    //Hide popup:
    popupWindow.classList.remove("popup_opened");
    //Remove the keydownd "escape" event listener:
    document.removeEventListener("keydown", closePopupViaEsc);
  }

  //Keydown "escape" event handler:
export function closePopupViaEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}
