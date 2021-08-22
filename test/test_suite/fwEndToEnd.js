const { loginPage } = require('../pageobjects/pom/loginPage');
const { productPage } = require('../pageobjects/pom/productPage');
const { pricePage } = require('../pageobjects/pom/pricePage');
const { finishPage } = require('../pageobjects/pom/finishPage');
let chaiExpect = require('chai').expect;

describe('End to end product selection', () => {
  it('To login to the website', () => {
    browser.url('/loginpagePractise/#');

    //Logging into the website
    loginPage.login('rahulshettyacademy', 'learning');
    productPage.waitForCheckOutButton();
  });

  it('To select the products with map , filter concepts learnt', () => {
    productPage.cardsName
      .filter((card) => card.$('div h4 a').getText() === 'Blackberry')
      .map((product) => product.$('.card-footer button').click());
  });

  it('If I need to select multiple products from my custom product list', () => {
    /**
     * items
     */
    let products = ['iphone X', 'Samsung Note 8'];

    //Here we are first taking the list of products  and checking whether the getTexted items are available there
    productPage.selectProducts(products);

    productPage.checkOut.scrollIntoView();
    productPage.checkOut.click();
  });

  it('Getting the prices of the selected item and summing them', () => {
    let sum = pricePage.sumOfProductsAdded();
    let total = pricePage.getTotalAmount();

    chaiExpect(sum).to.equal(
      total,
      `Expect sum ${sum} and total displayed ${total} to be equal`
    );

    pricePage.checkOutOnSuccess.scrollIntoView();
    pricePage.checkOutOnSuccess.click();
  });

  it('Entering the delivery location and handling the dynamic dropdown', () => {
    //Searching for india
    finishPage.location.setValue('ind');
    finishPage.loadingAnimation.waitForExist({ reverse: true }); // waits untill the element is gone
    finishPage.myLocation.click();
    finishPage.purchaseButton.click();

    //Validation in the alert banner we have the following text
    expect(finishPage.submissionAlert).toHaveTextContaining('buccess'); //deliberately wanting this to fail
  });
});
