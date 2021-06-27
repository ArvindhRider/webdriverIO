// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url("https://www.netflix.com/");
        console.log( browser.getTitle());

        //Expect condition
        //Positive scenario
        expect(browser).toHaveTitleContaining("Netflix");
        //negative scenario
        expect(browser).toHaveTitleContaining("Nerflix");

  
    });
});






  // await LoginPage.open();
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
