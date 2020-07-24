// Creating the PopupWithForm Class
// Create PopupWithForm as a child class of Popup. The PopupWithForm class must comply with the following requirements:
// It takes a callback of the form submission into the constructor, as well as the popup selector.
// It stores a private method named _getInputValues(), which collects data from all the input fields.
// It modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class has to add the click event listener to the close icon while also adding the submit event handler.
// It modifies the close() parent method in order to reset the form once the popup is closed.
// Create an instance of the PopupWithForm class for each popup.

import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit; 
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._inputValues = {};
    this._inputList.forEach(input => {
      this.inputValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector('.popup__button').addEventListener('submit', function() {
      this._handleFormSubmit(this._getInputValues());
      this._close();
    });
  }

  close() {
    super.close();
    this._popupElement.querySelector('.popup__form').reset();
  }
}

