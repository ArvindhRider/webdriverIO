let chaiExpect = require('chai').expect; //Note this !!!

xdescribe('My Login application', () => {

  it('UI Validations test', () => {
    browser.url("https://rahulshettyacademy.com/loginpagePractise/#");

    //Elements
    let userName = $("#username");
    let password = $('#password');
    let radioButton = (buttonName) => $(`//span[contains(text(),"${buttonName}")]/parent::label[@class="customradio"]`);
    let button = $('#okayBtn');
    let modal = $('.modal-body');
    //let dropDown = (dropDownValue) => $(`//select/option[text()="${dropDownValue}"]`);
    //we can also write dropDown element in the following way 
    let dropDown = $('select.form-control');

    //Passing the creds
    userName.setValue("rahulshettyacademy");
    password.setValue("learning");

    //clicking on the pop up 
    radioButton("User").click();

    //New waiting condition
    modal.waitForDisplayed();   // will wait until that particular element is displayed
    button.click();
    expect(modal).not.toBeDisplayed();

    //Click back admin radio button and checking if the modal is appearing or not
    radioButton("Admin").click();
    expect(modal).not.toBeDisplayed(); // we have used "not" before an assertion which can be used as a negation

    //Selecting a dropdown value
    //dropDown("Consultant").click(); // or

    //Method 1
    dropDown.selectByAttribute('value', 'consult');
    browser.pause(3000);
    //Method 2
    dropDown.selectByVisibleText('Student');
    browser.pause(2000);
    //Method 3
    dropDown.selectByIndex(1);
    browser.pause(1000);

    //Assertion from jasmine 
    //getValue() --> method
    expect(dropDown.getValue()).toBe("teach"); // will get the value of "dropdown"

    // //To get a better deeper understanding or to assert better we use the chai library from npm
    // //Positive scenario
    chaiExpect(dropDown.getValue()).to.contain("teach");
    chaiExpect(dropDown.getValue()).to.equal("teach");
    // //Negative scenario
   // chaiExpect(dropDown.getValue()).to.equal("teac");   
  });

  it('UI Validations Auto suggestive drop downs', () => {
    //Auto suggestive dropdowns
    browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    let dropDownBox = $('#autocomplete');
    dropDownBox.setValue('Ind');
    browser.pause(2000); // for Rider to see the options

    //Logic :- collecting all the options from the dom and if our value is available there we check and select

    let items = $$("//li[@class='ui-menu-item']/div");
    //Method 1 
    // for(let suggestion of items) {
    //   let options = suggestion.getText();
    //   console.log(options);
    //   if(options === "India") {
    //     suggestion.click();
    //   }
    // }
    // browser.pause(2500);

    //Method 2
   // dropDownBox.clearValue();
    dropDownBox.setValue('Ind');
    browser.pause(2000); // for Rider to see the options
    const myCountry = items.filter(suggestion => suggestion.getText() === "British Indian Ocean Territory");
    //Filter returns elements in an array , as per our condition there is onlty one indonesia and tat will sit in the 0th position
    myCountry[0].click();
    browser.pause(2500);
  });

  it('UI Validation checkboxes', () => {
    let checkBox = $('#checkBoxOption1');
    checkBox.click();
    expect(checkBox.isSelected()).toBe(true);
    browser.saveScreenshot("C:\\Users\\ARVINDH\\Desktop\\desktop junks\\trail.png");
  });

  it('Mouse hover practice', () => {
    let mouseHoverElement = $("#mousehover");
    mouseHoverElement.scrollIntoView();
    mouseHoverElement.moveTo();
    browser.pause(2500);
    let mouseHoverOption = $("a[href='#top']") 
    mouseHoverOption.click();
    browser.pause(2500);
  });



 
});
