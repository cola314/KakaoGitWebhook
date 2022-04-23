import { sendMessage } from './message-sender';
import * as config from './config';

test('send sample', () => {
  expect(() =>
    sendMessage(
      config.TESTER,
      `repo/refs/heads/master
https://github.com/cola314/KakaoGitWebhook
Push by gitea name

commit message`,
    ),
  ).not.toThrow();
});
