const axios = require('axios');

export function sendMessage(room, message) {
  axios
    .post('http://***REMOVED***:9200/send', {
      password: '4321',
      room: room,
      message: message,
    })
    .then(_ => {
      //post callback
    });
}
