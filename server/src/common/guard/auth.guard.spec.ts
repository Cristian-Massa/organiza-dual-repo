import { AuthGuard} from './auth.guard';

describe('CompaniesGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard()).toBeDefined();
  });
});
