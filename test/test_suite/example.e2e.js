// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');
//const netflixLoginPage = require('../pageobjects/netflix');

xdescribe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
        console.log( browser.getTitle());

        //Expect condition
        //Positive scenario [Example of customized assertion]
        expect(browser).toHaveTitleContaining("Rahul");
        
        //negative scenario
        //expect(browser).toHaveTitleContaining("bahul");
         const username = $("#id_userLoginId");
         const password = $('#password');

         // set value is like sendKeys
        $("#username").setValue("test");
        $('#password').setValue("Password");
        $("#signInBtn").click();
        
       console.log($('.alert-danger').getText());

        //wait until [copy from site]
       // Used in places where there is some text changes or loading animation changes like that
        browser.waitUntil(() => $("#signInBtn").getAttribute('value') === 'Sign In', { timeout: 5000, timeoutMsg: "Got timed out"});
        console.log($('.alert-danger').getText());
        browser.pause(5000);
  
    });
});






  // await LoginPage.open();
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
