describe('login', function() {

  var EC = protractor.ExpectedConditions;
  // var resource = 'https://vk.com/';
  // var resource = 'https://mail.ru'
    var resource = 'https://iba.com';
  var exec = require('child_process').execFile;

  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.get(resource);
  });

  beforeEach(function () {
    console.log('\n...');
    browser.sleep(5000);
  });

  describe('testing prompt', function() {

    it('should fill the prompt', function () {
      // for login(env), using with Jenkins Credentiasl plugin
      // var userName = process.env.MY_USER;
      // var userPass = process.env.MY_PASS;

      var userName = 'userName';
      var userPass = 'userPassasfasdfsg';

      console.log("type name", userName);
      console.log("type pass:", userPass)

      browser.driver.switchTo().activeElement();

      browser.sleep(2000);

      console.log("execute script");
      exec('./login(args).exe', [userName, userPass], function(err, data) {
          // exec('./ctrl-s.exe', ['DGFSDGSGSGSHSJLGHSGL', 'gagdfgsdhf'], function(err, data) {
          console.log(err);
          console.log(data.toString());
      });

      console.log("after execution");
      browser.sleep(10000);
    })



//     xit('should log in VK', function () {
//       browser.sleep(2000);
//
//       var userName = process.env.MY_USER;
//       var userPass = process.env.MY_PASS;
//
//       // browser.$('#index_email').sendKeys(process.env.MY_USER);
//       var field = browser.$('#ij_first_name');
//       field.sendKeys(userName);
//       console.log("type name", userName);
//
//       var field = browser.$('#ij_last_name');
//       field.sendKeys(userPass);
//       console.log("type pass:", userPass)
//
//       browser.sleep(5000);
//
// // mauil k2099913@mvrht.net
// // pass 1029384756qwert
//
//     // console.log(process.env.MY_USER);
//     // browser.sleep(3000);
//     // browser.switchTo().alert().
//     // sendKeys(process.env.MY_USERNAME + protractor.Key.TAB + process.env.MY_PASSWORD + protractor.Key.ENTER);
//     //		alert.accept();
//
//  	// 	return browser.wait(EC.alertIsPresent(), 5000)
//  	// 	.then(() => {
//  	// 	return browser.switchTo().alert().sendKeys(process.env.MY_USERNAME + protractor.Key.TAB + process.env.MY_PASSWORD + protractor.Key.ENTER)
//  //		alert.accept();
//     // });
//   });
})


});
