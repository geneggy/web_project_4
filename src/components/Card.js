export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardElement = document
      .querySelector(templateSelector)
      .content.cloneNode(true);
  }

  generateCard() {
    this._setEventListeners();
    const placeImage = this._cardElement.querySelector('.place__image');
    placeImage.src = this._link;
    placeImage.alt = this._name;
    this._cardElement.querySelector('.place__title').textContent = this._name;
    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector('.place__like-button')
      .addEventListener('click', (e) => {
        e.target.classList.toggle('place__like-button_liked');
      });

    this._cardElement
      .querySelector('.place__trash-button')
      .addEventListener('click', (e) => {
        e.target.parentElement.remove();
      });

    this._cardElement
      .querySelector('.place__image')
      .addEventListener('click', () => {
        this._handleCardClick(this._data);
      });
  }
}
