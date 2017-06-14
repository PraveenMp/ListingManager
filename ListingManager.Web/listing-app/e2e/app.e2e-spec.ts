import { ListingAppPage } from './app.po';

describe('listing-app App', () => {
  let page: ListingAppPage;

  beforeEach(() => {
    page = new ListingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
