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
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleTrashClick,
    userId,
    handleLikeClick
  ) {
    this._data = data;
    this._likes = data.likes;
    this._likeCount = this._likes.length;
    this._isLiked = false;
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;
    this._cardElement = document
      .querySelector(templateSelector)
      .content.cloneNode(true);
    this._likeButton = this._cardElement.querySelector(".place__like-button");
    this._likesElement = this._cardElement.querySelector(".place__likes");
  }

  _cardIsLiked() {
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === this._userId) {
        this._isLiked = true;
        break;
      }
    }
  }

  generateCard() {
    this._setEventListeners();
    const placeImage = this._cardElement.querySelector(".place__image");
    placeImage.src = this._link;
    placeImage.alt = this._name;
    this._cardElement.querySelector(".place__title").textContent = this._name;

    if (this._ownerId === this._userId) {
      this._cardElement
        .querySelector(".place__trash-button")
        .classList.remove("place__trash-button_hidden");
    }

    this._cardIsLiked();
    if (this._isLiked) {
      this._likeButton.classList.add("place__like-button_liked");
    }
    this._likesElement.textContent = this._likeCount;

    return this._cardElement;
  }

  _toggleIsLiked() {
    this._isLiked = !this._isLiked;
  }

  _likeCard() {
    this._toggleIsLiked();
    if (this._likeButton.classList.contains("place__like-button_liked")) {
      this._likeButton.classList.remove("place__like-button_liked");
      this._likeCount = this._likeCount - 1;
    } else {
      this._likeButton.classList.add("place__like-button_liked");
      this._likeCount = this._likeCount + 1;
    }
    this._likesElement.textContent = this._likeCount;
    this._handleLikeClick(this._id, this._isLiked);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeCard();
    });

    this._cardElement
      .querySelector(".place__trash-button")
      .addEventListener("click", (e) => {
        const trashTarget = e.target.parentElement;
        this._handleTrashClick(this, trashTarget);
      });

    this._cardElement
      .querySelector(".place__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._data);
      });
  }
}

// changeLikeCardStatus(cardId, cardIsLiked) {
