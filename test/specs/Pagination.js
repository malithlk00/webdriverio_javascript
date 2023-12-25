import HomePage from '../pages/homePage'
import assert from 'assert';
import Utils from '../helpers/utils';
import testdata from '../data/testdata.json'

describe("Verify Pagination", () => {


  before(async () => {

   // console.log("this is before hook")
     if (browser) {
    await browser.url(process.env.PAGE_URL); 
    await browser.maximizeWindow()
    await browser.pause(5000)
  }

})

  it("test Pagination", async () => {
    //await HomePage.open(process.env.PAGE_URL);
    await expect(browser).toHaveUrl(process.env.PAGE_URL+testdata.QUERY_PARAMS)
    const count = await HomePage.getUserCount();
    const totalPageCount = Math.floor(count/10)+1 ;
    const perpageCount = await HomePage.getPerPageCount();
    const tableSize = await HomePage.getTableSize();


    assert.equal(perpageCount,tableSize, 'per Page count should be equal to no: of records');
    assert.strictEqual(await HomePage.nextPageButtonIsClickable(), true, 'Next Page button should be clickable initially');

    await HomePage.clickOnNextPageButton();
    await expect(browser).toHaveUrl(process.env.PAGE_URL+ Utils.updatePageNoAndPageSize(testdata.QUERY_PARAMS,2,10))
    assert.strictEqual(await HomePage.prevPageButtonIsClickable(), true, 'Previous Page button should be clickable initially');
   
   
    await HomePage.clickOnPreviousPageButton();
    await expect(browser).toHaveUrl(process.env.PAGE_URL+testdata.QUERY_PARAMS)
   
    await HomePage.clickOnLastPageButton();
    await expect(browser).toHaveUrl(process.env.PAGE_URL+ Utils.updatePageNoAndPageSize(testdata.QUERY_PARAMS,totalPageCount,10))
    assert.strictEqual(await HomePage.firstPageButtonIsClickable(), true, 'First Page button should be clickable initially');
   
    await HomePage.clickOnFirstPageButton();
    await expect(browser).toHaveUrl(process.env.PAGE_URL+testdata.QUERY_PARAMS)
    assert.strictEqual(await HomePage.lastPageButtonIsClickable(), true, 'Last Page button should be clickable initially');

    //await browser.scroll(0, 500)
    await HomePage.selectPerPageCount();
    await expect(browser).toHaveUrl(process.env.PAGE_URL+ Utils.updatePageNoAndPageSize(testdata.QUERY_PARAMS,1,25))
    assert.equal((count>25 ? 25: count),await HomePage.getTableSize(), 'per Page count should be equal to no: of records 50');

   
  });

  after(async () => {
   // console.log("this is after hook")
    // if (browser) {
    //   await browser.deleteSession();
    // }
  })
});
