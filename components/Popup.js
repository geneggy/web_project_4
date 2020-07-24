// Creating the Popup Class
// Create the Popup class that opens and closes the popup window, as per the following requirements:
// The constructor has a single parameter, which is the popup selector.
// It stores the public methods open() and close() that will open and close the popup.
// It stores a private method named _handleEscClose() that stores the logic for closing the popup by pressing the Esc key.
// It stores a public method named setEventListeners() that adds a click event listener to the close icon of the popup.

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._close = this.close.bind(this);
  }

  open() {
    this.setEventListeners();
    this._popupElement.classList.add('popup_open');
    document.addEventListener('keyup', this._handleEscClose);
    
  }

  close() {
    this._popupElement.classList.remove('popup_open');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    } 
  }

  setEventListeners() {
    this._popupElement.querySelector('.popup__exit').addEventListener('click', this._close);
    document.addEventListener('keyup', this._handleEscClose);
    this._popupElement.addEventListener('click', (e) =>
      e.target.classList.contains('popup_open') ? this._close() : ''
    );
  }
}

