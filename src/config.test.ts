import { DEV_ENV, KAKAO_BOT_API_KEY, KAKAO_BOT_SERVER_API, USE_HTTPS } from './config';

test('env loaded', () => {
  expect(DEV_ENV).toBe('1');
  expect(KAKAO_BOT_SERVER_API).not.toBeUndefined();
  expect(KAKAO_BOT_API_KEY).not.toBeUndefined();
});

test('https option set zero', () => {
  expect(USE_HTTPS).toBe(false);
});
