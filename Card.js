import {togglePopup} from './utils.js';

export default class Card {
  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const placeImage = this._element.querySelector('.place__image');
    placeImage.src = this._link;
    placeImage.alt = this._link;
    this._element.querySelector('.place__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector('.place__like-button')
      .addEventListener('click', (e) => {
        e.target.classList.toggle('place__like-button_liked');
      });

    this._element
      .querySelector('.place__trash-button')
      .addEventListener('click', (e) => {
        e.target.parentElement.remove();
      });

    this._element
      .querySelector('.place__image')
      .addEventListener('click', () => {
        document.querySelector('.popup__image').src = this._link;
        document.querySelector('.popup__image').alt = this._name;
        document.querySelector('.popup__subtext').textContent = this._name;
        togglePopup(document.querySelector('.popup_img'));
      });
  }
}
