import { QueensModule } from './queens.module';

describe('QueensModule', () => {
  let queensModule: QueensModule;

  beforeEach(() => {
    queensModule = new QueensModule();
  });

  it('should create an instance', () => {
    expect(queensModule).toBeTruthy();
  });
});
