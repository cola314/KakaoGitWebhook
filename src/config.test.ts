import { DEV_ENV } from './config';

test('env loaded', () => {
  expect(DEV_ENV).toBe('1');
});
