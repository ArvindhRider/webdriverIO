// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');
//const netflixLoginPage = require('../pageobjects/netflix');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
        console.log( browser.getTitle());

        //Expect condition
        //Positive scenario
        expect(browser).toHaveTitleContaining("Rahul");
        //negative scenario
        //expect(browser).toHaveTitleContaining("bahul");
        // const username = $("#id_userLoginId");
        // const password = $('#id_password');
        $("#username").setValue("test");
        browser.pause(5000);
  
    });
});






  // await LoginPage.open();
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
