import Page from '../pages/basePage'
import {getText, scrollAndClick} from '../helpers/actions'


class HomePage extends Page {

    get nextPageButton () { return $("//*[@data-test='v-pagination-next']") }
    get previousPageButton () { return $("//*[@data-test='v-pagination-prev']") }
    get firstPageButton () { return $("//*[@data-test='v-pagination-first']") }
    get lastPageButton () { return $("//*[@data-test='v-pagination-last']") }
    get userCount () { return $("//*[@class='v-data-table-footer__info']")}
    //get perPageCount() { return $(".v-field--no-label .mdi-menu-down")}
    get perPageCount() { return $("(//span[@class='v-select__selection-text'])[3]")}
    get perPageCountValueAs50() { return $("div:nth-of-type(5) > div.v-list-item__content > div")} //  50 is selected
    get perPageCountValueAs25() { return $("div:nth-of-type(4) > div.v-list-item__content > div")} //  25 is selected
    get rowCount() { return $$("//tbody/tr")  }



    
    open (path) {
        return super.open(path);
    }

    async getTableSize(){

        const elements =  await this.rowCount;
        const rowCount = elements.length;
        console.log("row count is: "+rowCount)
        return rowCount;
    }

    async nextPageButtonIsClickable () {
        return await this.nextPageButton.isClickable()
    }

    async prevPageButtonIsClickable () {
        return await this.previousPageButton.isClickable()
    }


    async lastPageButtonIsClickable () {
        return await this.lastPageButton.isClickable()
    }

    async firstPageButtonIsClickable () {
        return await this.firstPageButton.isClickable()
    }


    async clickOnNextPageButton () {
        scrollAndClick(this.nextPageButton)
        console.log("clicked on Next page")

    }

    async clickOnPreviousPageButton () {
       scrollAndClick(this.previousPageButton)
        console.log("clicked on Previous page")
  
    }

    async clickOnFirstPageButton () {
       scrollAndClick(this.firstPageButton)
        console.log("clicked on First page")

    }

    async clickOnLastPageButton () {
        scrollAndClick(this.lastPageButton)
        console.log("clicked on Last page")

    }

    async getPerPageCount(){
       return getText(await this.perPageCount)
    }

    async selectPerPageCount () {
        await browser.pause(3000)
        scrollAndClick(this.perPageCount)
        await browser.pause(2000)
        scrollAndClick(this.perPageCountValueAs25)
        await browser.pause(3000)
        console.log("clicked on per page dropdown and selected a value")
    }

    async getURL(){
        await browser.getUrl();
    }

    async getUserCount(){
        let count =  await getText(this.userCount)
        const match = count.match(/of\s*(\d+)/);
        console.log("Count is: "+match[1])
        return match ? match[1] : null;

    }

}

export default new HomePage();