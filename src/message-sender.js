const axios = require('axios');

exports.sendMessage = function sendMessage(room, message) {
  axios
    .post('http://***REMOVED***:9200/send', {
      password: '4321',
      room: room,
      message: message,
    })
    .then(_ => {
      //post callback
    });
};
