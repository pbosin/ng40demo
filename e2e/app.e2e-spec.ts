import { Ng40demoPage } from './app.po';

describe('ng40demo App', () => {
  let page: Ng40demoPage;

  beforeEach(() => {
    page = new Ng40demoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
