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
    this._popupElement
      .querySelector('.popup__exit')
      .addEventListener('click', this._close);
    document.addEventListener('keyup', this._handleEscClose);
    this._popupElement.addEventListener('click', (e) =>
      e.target.classList.contains('popup_open') ? this._close() : ''
    );
  }
}
