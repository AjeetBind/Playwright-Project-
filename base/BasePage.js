import WebUtils from '../utils/WebUtils.js';

export default class BasePage {

    constructor(page) {
        this.page = page;
    }
    // Purpose: Open application URL
    async openURL(url) {
        await WebUtils.goto( this.page, url,'OrangeHRM application');
    }

    // Purpose: Reload the current page
    async reload() {
         await WebUtils.reload(this.page);
    }

    // Purpose: Navigate to the previous page
    async goBack() {
        await WebUtils.goBack( this.page);
    }


    // Purpose: Navigate to the next page
    async goForward() {

        await WebUtils.goForward( this.page);
    }


    // Purpose: Get the current page URL
    async getCurrentURL() {
        return await WebUtils.url( this.page);
    }


    // Purpose: Get the current page title
    async getTitle() {
        return await WebUtils.title(this.page);
    }
}