export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    const userDetails = {};
    userDetails["userName"] = this._name.textContent;
    userDetails["userJob"] = this._about.textContent;

    return userDetails;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    if (data.avatar) {
      this._avatar.src = data.avatar;
    }
  }
}
