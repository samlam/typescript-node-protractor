import Configs = require('./models/config');
import {sampleApi} from './api.service';

browser.ignoreSynchronization = true;
browser.get('http://' + Configs.serverHost);

/*
let api:sampleApi = new sampleApi();
api.sendRequest();
*/
describe('hello site', () => {
    it('should see title', ()=>{
        browser
            .getTitle()
            .then((title) => {
                console.error('page title :' + title);
                expect(title).toContain('CNN' );
        });
    });
});
