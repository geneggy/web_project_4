// Token: 84e6855b-5fd3-47bd-8833-73dfffbf3da7
// Group ID: group-3
//https://around.nomoreparties.co/v1/group-3
//token goes inside headers

//fetch cards
//https://around.nomoreparties.co/v1/groupId/cards

//edit user infp
//PATCH https://around.nomoreparties.co/v1/groupId/users/me

//Add Card
//POST https://around.nomoreparties.co/v1/groupId/cards

//Delete Card
//DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
//DELETE https://around.nomoreparties.co/v1/groupId/cards/5d1f0611d321eb4bdcd707dd

//adding/removing likes
//PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
//DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId

//update user pic
//PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar

export default class Api {
  constructor({url, headers, token}) {
    this._url = url;
    this._headers = headers;
    this._token = token;
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      });
  }}