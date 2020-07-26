export default class userInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._name = this._nameElement.textContent;
    this._job = this._jobElement.textContent;
  }

  getUserInfo() {
    return {
      name: this._name,
      job: this._job,
    };
  }

  setUserInfo(name, about) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
  }
}
