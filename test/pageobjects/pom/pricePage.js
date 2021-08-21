class PricePage {
  /**
   * Elements
   */

  get amount() {
    return $$('tr td:nth-child(4) strong');
  }

  get totalPrice() {
    return $('h3 strong');
  }

  get checkOutOnSuccess() {
    return $('.btn.btn-success');
  }

  /**
   * Methods
   */

  /**
   * To get the sum of the products added
   */
  sumOfProductsAdded() {
    return this.amount
      .map((productPrice) =>
        parseFloat(productPrice.getText().split('.')[1].trim())
      )
      .reduce((accumulatr, amounts) => accumulatr + amounts, 0);
  }

  /**
   * To get the trimmed float version of total amount
   */
  getTotalAmount() {
      return parseFloat(this.totalPrice.getText().split('.')[1].trim());
  }
}
module.exports = {
  pricePage: new PricePage(),
};
