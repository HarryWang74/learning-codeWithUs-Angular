import { LeanringCodeWithUsAngularPage } from './app.po';

describe('leanring-code-with-us-angular App', () => {
  let page: LeanringCodeWithUsAngularPage;

  beforeEach(() => {
    page = new LeanringCodeWithUsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
