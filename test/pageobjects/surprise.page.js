import { $, $$ } from '@wdio/globals'
import Page from './page.js';

class SurprisePage extends Page {
    get gameArt () {
        return $$('.art>#row-image');
    }

    get filterDrop () {
        return $$('.dropdown-selected-item');
    }

    get nextBtn () {
        return $('button.btn-primary');
    }

    get surpriseBtn () {
        return $('.btn-surprise');
    }
}

export default new SurprisePage();
