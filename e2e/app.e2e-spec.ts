import { SonarQubePage } from './app.po';

describe('sonar-qube App', () => {
  let page: SonarQubePage;

  beforeEach(() => {
    page = new SonarQubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
