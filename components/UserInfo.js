// Creating the UserInfo Class
// The UserInfo class is responsible for rendering information about the user on the page. This class should:
// Take an object with the selectors of two elements into the constructor: one containing the user's name, and another containing the user's job.
// Store a public method named getUserInfo(), which returns an object with information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
// Store a public method named setUserInfo(), which takes new user data and adds it on the page.


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
      job: this._job
    };
  }

  setUserInfo(name, about) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
  }
}