export default class userInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._name = document.querySelector(nameSelector).textContent;
    this._job = document.querySelector(jobSelector).textContent;
  
  }

  getUserInfo() {
    return {
      name: this._name,
      job: this._job,
    };
  }

  setUserInfo({name, about}) {
    this._name = name;
    this._job = about;
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
  }
}
