import { $, $$ } from '@wdio/globals'
import Page from './page.js';

class SearchPage extends Page {
    get tagsContainer () {
        return $('.search-tags');
    }

    get tags () {
        return $$('.search-tags>li');
    }
}

export default new SearchPage();
