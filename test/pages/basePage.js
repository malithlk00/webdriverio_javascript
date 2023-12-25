export default class Page {

    async open (path) {
        await browser.url(path)
        await browser.maximizeWindow()
        await browser.pause(5000)

    }
}