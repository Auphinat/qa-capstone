import { $, $$, browser, expect } from '@wdio/globals'
import Page from './page.js'
import SearchPage from './search.page.js';

class GamePage extends Page {
    get gameTitle () {
        return $('.game-title>h1');
    }

    get gameDescription () {
        return $('.expandable-html-block>p');
    }

    get modCategories () {
        return $$('a.class-category-item');
    }

    async clickAllCategories () {
        let catLength = await this.modCategories.length;
        for (let i = 0; i < (catLength - 1); i++) {
            await this.scrollTo(this.modCategories[i]);
            await this.modCategories[i].click();
            await SearchPage.tags[0].click();
            await expect(SearchPage.tags).toBeElementsArrayOfSize(0);
            for (let i = 0; i < 2; i++) {
                await browser.back();
            };
        };
    }

    async search (input) {
        await SearchPage.search(input);
    }

    async open (game) {
        await super.open(game);
    }
}

export default new GamePage();
