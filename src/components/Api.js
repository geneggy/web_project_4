/* eslint-disable no-console */
/* eslint-disable no-unused-vars */


// Token: 84e6855b-5fd3-47bd-8833-73dfffbf3da7
// Group ID: group-3
//https://around.nomoreparties.co/v1/group-3
//token goes inside headers



export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }


  //https://around.nomoreparties.co/v1/groupId/cards
  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch(err => console.log(err));
  }

  // get user info
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this.headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch(err => console.log(err));
  }

  getAppInfo() {}

  //POST https://around.nomoreparties.co/v1/groupId/cards
  addCard({ name, link}) {}

  //DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/5d1f0611d321eb4bdcd707dd
  removeCard(cardId) {}

  //PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  changeLikeCardStatus(cardId, like) {}
  
  //PATCH https://around.nomoreparties.co/v1/groupId/users/me
  setUserInfo() {}

  //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  setUserAvatar({avatar}) {}

}