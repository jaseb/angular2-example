import { AePage } from './app.po';

describe('ae App', function() {
  let page: AePage;

  beforeEach(() => {
    page = new AePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
