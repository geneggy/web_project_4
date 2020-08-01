/* eslint-disable no-unused-vars */


// Token: 84e6855b-5fd3-47bd-8833-73dfffbf3da7
// Group ID: group-3
//https://around.nomoreparties.co/v1/group-3
//token goes inside headers

// const api = new Api({
//   baseUrl: "https://around.nomoreparties.co/v1/group-3",
//   headers: {
//     authorization: "84e6855b-5fd3-47bd-8833-73dfffbf3da7",
//     "Content-Type": "application/json"
//   }
// });

export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }


  //https://around.nomoreparties.co/v1/groupId/card
  getCardList() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      });
  }

  // get user info
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      });
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