// Creating the UserInfo Class
// The UserInfo class is responsible for rendering information about the user on the page. This class should:
// Take an object with the selectors of two elements into the constructor: one containing the user's name, and another containing the user's job.
// Store a public method named getUserInfo(), which returns an object with information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
// Store a public method named setUserInfo(), which takes new user data and adds it on the page.


export default class userInfo {
  constructor({nameSelector, jobSelector}) {
    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector,
      job: this._jobSelector
    };
  }

  setUserInfo(name, job) {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = job;
  }
}