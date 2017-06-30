import { SantoriniAgPage } from './app.po';

describe('santorini-ag App', () => {
  let page: SantoriniAgPage;

  beforeEach(() => {
    page = new SantoriniAgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
