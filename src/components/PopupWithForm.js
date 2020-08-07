import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupElement = document.querySelector(popupSelector);
    this._buttonElement = this._popupElement.querySelector(".popup__button");
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".popup__input");
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    console.log(this._handleFormSubmit);
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitHandler = (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    };

    this._buttonElement.addEventListener("click", this._submitHandler);
  }

  close() {
    this._popupElement.querySelector(".popup__form").reset();
    this._buttonElement.removeEventListener("click", this._submitHandler);
    super.close();
  }
}
