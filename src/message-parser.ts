export function parse(json) {
  return (
    `${json.repository.name}/${json.ref}\n` +
    `${json.commits[json.commits.length - 1].url}\n` +
    `Push by ${json.pusher.username || json.pusher.name}\n\n` +
    `${json.commits[json.commits.length - 1].message}`
  );
}
