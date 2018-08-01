import { WeeklyResultsModule } from './weekly-results.module';

describe('WeeklyResultsModule', () => {
  let weeklyResultsModule: WeeklyResultsModule;

  beforeEach(() => {
    weeklyResultsModule = new WeeklyResultsModule();
  });

  it('should create an instance', () => {
    expect(weeklyResultsModule).toBeTruthy();
  });
});
