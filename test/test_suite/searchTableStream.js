let chaiExpect = require('chai').expect; //Note this !!!

describe('Search table results', () => {
  it('To search for something and do validations using js stream', () => {
    browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    /**
     * Elements
     */
    let searchBox = $('#search-field');
    let vegetables = $$('tr td:nth-child(1)');

    /**
     * Validations
     */
    expect(vegetables).toBeElementsArrayOfSize(5);
    //After entering the required search data
    searchBox.setValue("Tomato");
    //Validaing whether the row 1 column one has only one item and that item being tomato
    expect(vegetables).toBeElementsArrayOfSize(1);
    expect(vegetables[0]).toHaveTextContaining('Tomato');
    //Negative case
    expect(vegetables[0]).toHaveTextContaining('zomato');
  });

  //Take away methods from this class
  // 1) toBeElementsArrayOfSize() --> gives the size of the arraylist directly, used with expect
  // 2) toHaveTextContaining() --> checks if the element has the text specified no need to getText that and check.
});
