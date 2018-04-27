import { TensorFlowTestPage } from './app.po';

describe('tensor-flow-test App', () => {
  let page: TensorFlowTestPage;

  beforeEach(() => {
    page = new TensorFlowTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
