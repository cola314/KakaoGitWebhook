const { sendMessage } = require('./message-sender');

test('send sample', () => {
  expect(() =>
    sendMessage(
      'test',
      `repo/refs/heads/master
https://github.com/cola314/KakaoGitWebhook
Push by gitea name

commit message`,
    ),
  ).not.toThrow();
});
