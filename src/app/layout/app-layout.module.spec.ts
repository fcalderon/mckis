import { AppLayoutModule } from './app-layout.module';

describe('AppLayoutModule', () => {
  let layoutModule: AppLayoutModule;

  beforeEach(() => {
    layoutModule = new AppLayoutModule();
  });

  it('should create an instance', () => {
    expect(layoutModule).toBeTruthy();
  });
});
