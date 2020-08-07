import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ link, caption }) {
    const popupImgElement = this._popupElement.querySelector(".popup__image");
    popupImgElement.src = link;
    popupImgElement.alt = caption;
    this._popupElement.querySelector(".popup__subtext").textContent = caption;
    super.open();
  }
}
