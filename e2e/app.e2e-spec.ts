import { SportsCheckInPage } from './app.po';

describe('sports-check-in App', () => {
  let page: SportsCheckInPage;

  beforeEach(() => {
    page = new SportsCheckInPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
