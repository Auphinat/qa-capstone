import { $, $$ } from '@wdio/globals'
import Page from './page.js';

class ModPage extends Page {
    get modGame () {
        return $('.breadcrumbs>ul>li:nth-child(2)');
    }

    get modTag () {
        return $('a.class-tag');
    }

    get projectID () {
        return $('span.project-id');
    }

    get gallery () {
        return $('#gallery>a');
    }

    get relations () {
        return $('#relations>a');
    }

    get pageNumbers () {
        return $$('.top>.page-numbers>li>button');
    }

    async selectGallery () {
        await this.scrollTo(this.gallery);
        await this.gallery.click();
    }

    async selectRelations () {
        await this.scrollTo(this.relations);
        await this.relations.click();
    }

    async selectRelationsPage (index) {
        if ((await this.pageNumbers.length) == 0) {
            return;
        }
        await this.scrollTo(this.pageNumbers[index]);
        await this.pageNumbers[index].click();
    }

    async open (page) {
        await super.open(page);
    }
}

export default new ModPage();
