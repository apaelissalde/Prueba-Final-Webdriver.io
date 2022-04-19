const PAGE_TIMEOUT = 10000

export default class BasePage {


   /**
    * Open the page
    * @param {String} path where we are logging in
    */

    async open(path) {
        await browser.url(path)
    }

   /**
    * @param {Object} element
    */
    async clickElement(element) {
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.click();
    }
}