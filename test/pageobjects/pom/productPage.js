class ProductPage {
  /**
   * Elements
   */
 

  get checkOut() {
    return $('*=Checkout');
  }

  get cardsName() {
      return $$('div[class="card h-100"]');
  }
  /**
   * Methods
   */

  /**
   * Wait until the checkout button is available
   */
  waitForCheckOutButton() {
    this.checkOut.waitForExist();
    browser.pause(5000);
  }

  /**
   * To just pass the array and get the items clicked
   * @param {string} itemsToBeAdded
   */
  selectProducts(itemsToBeAdded) {
      this.cardsName
      .filter((card) => itemsToBeAdded.includes(card.$('div h4 a').getText()))
      .map((cart) => cart.$('.card-footer button').click());
  }
}
module.exports = {
  productPage: new ProductPage(),
};
