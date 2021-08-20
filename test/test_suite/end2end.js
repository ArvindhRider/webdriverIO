let chaiExpect = require('chai').expect;

describe('End to end product selection', () => {
  it('To login to the website', () => {
    /**
     * Elements
     */
    let userName = $('#username');
    let password = $('#password');
    let signIn = $('#signInBtn');
    let link = $('*=Checkout');

    browser.url('https://rahulshettyacademy.com/loginpagePractise/#');

    //Passing the creds
    userName.setValue('rahulshettyacademy');
    password.setValue('learning');
    signIn.click();
    link.waitForExist();
  });

  it('To select the products with map , filter concepts learnt', () => {
    /**
     * Elements
     */
    let cardName = $$('div[class="card h-100"]');

    cardName
      .filter((card) => card.$('div h4 a').getText() === 'Blackberry')
      .map((product) => product.$('.card-footer button').click());
  });

  it('If I need to select multiple products from my custom product list', () => {
    /**
     * Elements and items
     */
    let products = ['iphone X', 'Samsung Note 8'];
    let cardName = $$('div[class="card h-100"]');
    let link = $('*=Checkout');

    //Here we are first taking the list of products  and checking whether the getTexted items are available there
    cardName
      .filter((card) => products.includes(card.$('div h4 a').getText()))
      .map((cart) => cart.$('.card-footer button').click());

    link.scrollIntoView();
    link.click();
  });

  it('Getting the prices of the selected item and summing them', () => {
    /**
     * Elements
     */
    let amount = $$('tr td:nth-child(4) strong');
    let totalPrice = $('h3 strong');
    let checkout = $('.btn.btn-success');

    let sum = amount
      .map((productPrice) =>
        parseFloat(productPrice.getText().split('.')[1].trim())
      )
      .reduce((accumulatr, amounts) => accumulatr + amounts, 0);

    let total = parseFloat(totalPrice.getText().split('.')[1].trim());

    chaiExpect(sum).to.equal(
      total,
      `Expect sum ${sum} and total displayed ${total} to be equal`
    );

    checkout.scrollIntoView();
    checkout.click();
  });

  it('Entering the delivery location and handling the dynamic dropdown', () => {
    /**
     * Elements
     */
    let location = $('#country');
    let loadingAnimation = $('.lds-ellipsis');
    let myLocation = $('*=India');
    let purchaseButton = $('//input[contains(@class,"btn")]');
    let alert = $('//div[contains(@class,"alert")]');

    //Searching for india
    location.setValue("ind");
    loadingAnimation.waitForExist({reverse:true}); // waits untill the element is gone
    myLocation.click();
    purchaseButton.click();

    //Validation in the alert banner we have the following text
    expect(alert).toHaveTextContaining("Success");

  });
});
