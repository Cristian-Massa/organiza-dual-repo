import { AuthCheckMiddleware } from './authCheck.middleware';

describe('CommonMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthCheckMiddleware()).toBeDefined();
  });
});
