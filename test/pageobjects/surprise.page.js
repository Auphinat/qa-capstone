import { browser, $, $$ } from '@wdio/globals'
import Page from './page.js';

class SurprisePage extends Page {
    get kebab () {
        return $('.kebab-button');
    }

    get surpriseKebab () {
        return $('ul>li>a[href="/project/explorer/choose-game"]');
    }

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

    get modIcon () {
        return $('.project-logo');
    }

    get modName () {
        return $('.name-container>a>h1');
    }

    async openSurprise () {
        await this.scrollTo(this.kebab);
        await this.kebab.click();

        await this.surpriseKebab.click();
    }

    async clickSurprise (gameIndex, amount) {
        await this.gameArt[gameIndex].click();
        await this.nextBtn.click();
        await this.nextBtn.click();

        for (let i = 0; i < amount; i++) {
            await this.surpriseBtn.click();
        }
    }

    async rollSurprise (gameIndex, amount) {
        await this.openSurprise();
        await this.clickSurprise(gameIndex, amount);
    }
}

export default new SurprisePage();
