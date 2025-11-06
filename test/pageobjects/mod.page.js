import { $ } from '@wdio/globals'
import Page from './page.js';

class ModPage extends Page {
    get modGame () {
        return $('.breadcrumbs>ul>li:nth-child(2)');
    }

    get modTag () {
        return $('a.class-tag');
    }
}

export default new ModPage();
