import { MagAppModule } from './mag-app.module';

describe('MagAppModule', () => {
  let magAppModule: MagAppModule;

  beforeEach(() => {
    magAppModule = new MagAppModule();
  });

  it('should create an instance', () => {
    expect(magAppModule).toBeTruthy();
  });
});
