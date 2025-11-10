import { $, $$ } from '@wdio/globals'
import Page from './page.js';

class SearchPage extends Page {
    get tagsContainer () {
        return $('.search-tags');
    }

    get tags () {
        return $$('.search-tags>li');
    }

    get searchInput () {
        return $('.search-input-field');
    }

    get searchBtn () {
        return $('.btn-search');
    }

    get tagList () {
        return $$('.classes-list>li>a');
    }
    
    get resultsList () {
        return $$('.results-container>div');
    }

    async search (input) {
        await this.scrollTo(this.searchInput);
        await this.searchInput.setValue(input);

        await this.scrollTo(this.searchBtn);
        await this.searchBtn.click();
    }

    async selectTag (index) {
        await this.scrollTo(this.tagList[index]);
        await this.tagList[index].click();
    }

    async selectAllTags () {
        let listLength = await this.tagList.length;

        for (let i = 0; i < listLength; i++) {
            await this.scrollTo(this.tagList[i]);
            await this.tagList[i].click();
        }
    }

    async selectResult (index) {
        await this.scrollTo(this.resultsList[index]);
        await this.resultsList[index].$('.overlay-link').click();
    }
}

export default new SearchPage();
