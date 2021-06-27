/**
 * Imports
 */

class NetflixLoginPage {
  /**
   * Elements
   */

  get inputUsername() {
    return $('#id_userLoginId');
  }
  get inputPassword() {
    return $('#id_password');
  }
}

module.exports = new netflixLoginPage();
