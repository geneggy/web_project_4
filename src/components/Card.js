// {
//   "likes": [],
//   "_id": "5d1f0611d321eb4bdcd707dd",
//   "name": "Yosemite Valley",
//   "link": "https://code.s3.yandex.net/web-code/yosemite.jpg",
//   "owner": {
//     "name": "Jacques Cousteau",
//     "about": "Sailor, researcher",
//     "avatar": "https://code.s3.yandex.net/web-code/avatar.jpg",
//     "_id": "ef5f7423f7f5e22bef4ad607",
//     "cohort": "group-42"
//   },


export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick) {
    this._data = data;
    this._likes = data.likes;
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
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
        console.log(this._id);
        this._handleDeleteClick(this._id);
        //open popup_delete
        //popup delete will have event listener for button.  If clicked, pass this._data to server to delete selected card ID and then delete image element, perhaps pass popup delete as 
        e.target.parentElement.remove();
      });

    this._cardElement
      .querySelector('.place__image')
      .addEventListener('click', () => {
        this._handleCardClick(this._data);
      });
  }
}
