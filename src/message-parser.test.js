const fs = require('fs');
const { parse } = require('./message-parser');

const example = fs.readFileSync('test-webhook-message.json').toString();
const data = JSON.parse(example);

test('parse', () => {
  const expected = `repo/refs/heads/master
https://github.com/cola314/KakaoGitWebhook
Push by gitea name

commit message`;
  expect(parse(data)).toBe(expected);
});
