import { $, browser, expect } from '@wdio/globals'

export default class Page {
    get cookiebtn () {
        return $('#cookiebar-ok');
    }

    async acceptCookie () {
        await this.cookiebtn.click();
    }

    open (path) {
        return browser.url(`https://www.curseforge.com/${path}`)
    }
}
