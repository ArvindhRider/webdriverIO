class FinishPage {

    get location() {
        return $('#country');
    }

    get myLocation() {
        return $('*=India');
    }

    get purchaseButton() {
        return $('//input[contains(@class,"btn")]');
    }

    get submissionAlert() {
        return $('//div[contains(@class,"alert")]');
    }

    get loadingAnimation() {
        return  $('.lds-ellipsis');
    }
}
module.exports = {
    finishPage: new FinishPage(),
  };
  