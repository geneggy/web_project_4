import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleConfirmSubmit) {
    super(popupSelector);
    this._handleConfirmSubmit = handleConfirmSubmit;
    this._popupElement = document.querySelector(popupSelector);
    this._buttonElement = this._popupElement.querySelector(".popup__button");
  }

  open(card, trashParent) {
    this._card = card;
    this._trashParent = trashParent;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitHandler = (e) => {
      e.preventDefault();
      this._handleConfirmSubmit(this._card, this._trashParent);
      this.close();
    };

    this._buttonElement.addEventListener("click", this._submitHandler);
  }

  close() {
    this._buttonElement.removeEventListener("click", this._submitHandler);
    super.close();
  }
}
