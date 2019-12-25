import { StudyingAngularNgrxPage } from './app.po';

describe('studying-angular-ngrx App', () => {
  let page: StudyingAngularNgrxPage;

  beforeEach(() => {
    page = new StudyingAngularNgrxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
