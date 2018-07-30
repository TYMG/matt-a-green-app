import { RpdrFlModule } from './rpdr-fl.module';

describe('RpdrFlModule', () => {
  let rpdrFlModule: RpdrFlModule;

  beforeEach(() => {
    rpdrFlModule = new RpdrFlModule();
  });

  it('should create an instance', () => {
    expect(rpdrFlModule).toBeTruthy();
  });
});
