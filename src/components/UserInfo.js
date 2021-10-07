export default class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    const userDetails = {};
    userDetails["userName"] = this._name.textContent;
    userDetails["userJob"] = this._job.textContent;

    return userDetails;
  }

  setUserInfo(data) {
    const { name, job } = data;
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
