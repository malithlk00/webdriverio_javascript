import Page from '../pages/basePage'
import {getText, scrollAndClick} from '../helpers/actions'


class HomePage {

    get burgerMenu () { return $("#react-burger-menu-btn") }
    get logOutBtn () { return $("#logout_sidebar_link") }


    
    // open (path) {
    //     return super.open(path);
    // }

    async clickOnMenu(){
        return scrollAndClick(await this.burgerMenu);
    }



    async clickOnLogout () {
        return scrollAndClick(await this.logOutBtn);
    }

    // async prevPageButtonIsClickable () {
    //     return await this.previousPageButton.isClickable()
    // }


    // async lastPageButtonIsClickable () {
    //     return await this.lastPageButton.isClickable()
    // }

    // async firstPageButtonIsClickable () {
    //     return await this.firstPageButton.isClickable()
    // }


    // async clickOnNextPageButton () {
    //     scrollAndClick(this.nextPageButton)
    //     console.log("clicked on Next page")

    // }

    // async clickOnPreviousPageButton () {
    //    scrollAndClick(this.previousPageButton)
    //     console.log("clicked on Previous page")
  
    // }

    // async clickOnFirstPageButton () {
    //    scrollAndClick(this.firstPageButton)
    //     console.log("clicked on First page")

    // }

    // async clickOnLastPageButton () {
    //     scrollAndClick(this.lastPageButton)
    //     console.log("clicked on Last page")

    // }

    // async getPerPageCount(){
    //    return getText(await this.perPageCount)
    // }

    // async selectPerPageCount () {
    //     await browser.pause(3000)
    //     scrollAndClick(this.perPageCount)
    //     await browser.pause(2000)
    //     scrollAndClick(this.perPageCountValueAs25)
    //     await browser.pause(3000)
    //     console.log("clicked on per page dropdown and selected a value")
    // }

    // async getURL(){
    //     await browser.getUrl();
    // }

    // async getUserCount(){
    //     let count =  await getText(this.userCount)
    //     const match = count.match(/of\s*(\d+)/);
    //     console.log("Count is: "+match[1])
    //     return match ? match[1] : null;

    // }

}

export default new HomePage();