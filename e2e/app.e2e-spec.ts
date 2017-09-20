import { FooPage } from './app.po';

describe('foo App', () => {
  let page: FooPage;

  beforeEach(() => {
    page = new FooPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
