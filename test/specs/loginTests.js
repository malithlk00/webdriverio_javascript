import LoginPage from '../pages/loginPage'
import HomePage from "../pages/homePage";
import assert from 'assert';
import Utils from '../helpers/utils';
import testdata from '../data/testdata.json'


describe("Verify Login", () => {

    beforeEach(async () => {
       if (browser) {
      await browser.url(process.env.PAGE_URL); 
      await browser.maximizeWindow()
      await browser.pause(5000)
      await expect(browser).toHaveUrl(process.env.PAGE_URL)
    }
  
  })
  
    it("test login features", async () => {

        await LoginPage.enterUsername(testdata.USERNAME);
        await LoginPage.enterPassword(testdata.PASSWORD);
        await LoginPage.clickLoginBtn();
        await HomePage.clickOnMenu();
        await HomePage.clickOnLogout();
        
    })

    it("test login failures-1", async () => {

        console.log("starting login failures-1 test")
        await LoginPage.enterUsername(testdata.USERNAME);
        await LoginPage.enterPassword("");
        await LoginPage.clickLoginBtn();
        assert.equal("Epic sadface: Password is required",await LoginPage.getErrorMessage())

    })

    it("test login failures-2", async () => {

        console.log("starting login failures-2 test")
        await LoginPage.clearUsername();
        await LoginPage.enterPassword(testdata.PASSWORD);
        await LoginPage.clickLoginBtn();
        assert.equal("Epic sadface: Username is required",await LoginPage.getErrorMessage())

    })

    it("test login failures-3", async () => {

        console.log("starting login failures-3 test")
        await LoginPage.enterPassword("");
        await LoginPage.enterUsername("");
        await LoginPage.clickLoginBtn();
        assert.equal("Epic sadface: Username is required",await LoginPage.getErrorMessage())
    })


    afterEach(async () => {

        if (browser) {
            await browser.reloadSession()
        }
    })

});