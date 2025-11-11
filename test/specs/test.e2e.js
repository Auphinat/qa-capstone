import { expect } from '@wdio/globals'
import GamePage from '../pageobjects/game.page.js'
import ModPage from '../pageobjects/mod.page.js'
import SurprisePage from '../pageobjects/surprise.page.js';
import SearchPage from '../pageobjects/search.page.js';

// Testing: Game page, Search, Mod page, Surprise me 

describe('big testing', () => {
    it('is it Break??', async () => {
        await GamePage.open('minecraft')
        await expect(GamePage.gameTitle).toExist();
        await GamePage.acceptCookie();

        await GamePage.clickAllCategories();
        await GamePage.search('Something');

        await SearchPage.search('Another');
        await SearchPage.search('Three');
        await SearchPage.selectAllTags();
        await SearchPage.selectResult(0);
        
        await expect(ModPage.projectID).toExist();
        await ModPage.selectGallery();
        await ModPage.selectRelations();
        await ModPage.selectRelationsPage(2);

        await SurprisePage.rollSurprise(0, 3);
        await SurprisePage.rollSurprise(1, 3);
        await SurprisePage.rollSurprise(2, 3);
    })
})

