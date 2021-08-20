let chaiExpect = require('chai').expect; //Note this !!!

describe('End to end product selection', () => {
  it('To login to the website', () => {
    /**
     * Elements
     */
    let userName = $('#username');
    let password = $('#password');
    let signIn = $('#signInBtn');

    browser.maximizeWindow();
    browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
    //Passing the creds
    userName.setValue('rahulshettyacademy');
    password.setValue('learning');
    signIn.click();
    browser.pause(5000);
  });

  it('To select the products with map , filter concepts learnt', () => {
      /**
       * Elements
       */
      let cardName = $$('div[class="card-body"] h4 a');

    cardName.filter(card=> card.getText() === 'Blackberry').map(product => product.$('.card-footer button').click());
    browser.pause(5000);

  });

});
