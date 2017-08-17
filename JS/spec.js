describe('comparison two iPhones scenario', function() {

  var EC = protractor.ExpectedConditions;
  var resource = 'https://vk.com/';

  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.get(resource);
  });

  beforeEach(function () {
    console.log('\n...');
    browser.sleep(5000);
  });

  describe('testing prompt', function() {

    it('should log in', function () {
      browser.sleep(2000);

      // browser.$('#index_email').sendKeys(process.env.MY_USER);
      var field = browser.$('#ij_first_name');
      field.getAttribute('name').
        then((attr) => {
          console.log("NAME:", attr);
        })

      field.sendKeys(process.env.MY_USER);

      var field = browser.$('#ij_last_name');
      field.getAttribute('name').
        then((attr) => {
          console.log("NAME:", attr);
        })

      field.sendKeys(process.env.MY_USER);

      browser.sleep(5000);

    // console.log(process.env.MY_USER);
    // browser.sleep(3000);
    // browser.switchTo().alert().
    // sendKeys(process.env.MY_USERNAME + protractor.Key.TAB + process.env.MY_PASSWORD + protractor.Key.ENTER);
    //		alert.accept();

 	// 	return browser.wait(EC.alertIsPresent(), 5000)
 	// 	.then(() => {
 	// 	return browser.switchTo().alert().sendKeys(process.env.MY_USERNAME + protractor.Key.TAB + process.env.MY_PASSWORD + protractor.Key.ENTER)
 //		alert.accept();
    // });
  });
})


});
