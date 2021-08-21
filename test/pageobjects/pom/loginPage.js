class LoginPage {
  /**
   * Elements
   */
  get userName() {
    return $('#username');
  }

  get password() {
    return $('#password');
  }

  get signIn() {
    return $('#signInBtn');
  }

  /**
   * Methods
   */
  /**
   * To login to the site
   * @param {string} userName
   * @param {string} password
   */
  login(userName, password) {
    this.userName.setValue(userName);
    this.password.setValue(password);
    this.signIn.click();
  }
}

module.exports = {
  loginPage: new LoginPage(),
};
