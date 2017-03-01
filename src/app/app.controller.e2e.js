describe('app.controller', () => {
    beforeEach(() => {
        browser.get('http://localhost:3000');
    });
    it('test', () => {
        expect(browser.getTitle()).not.toEqual('!');
    });
});