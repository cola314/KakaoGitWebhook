const https = require('https')
const express = require('express')
const app = express()
const request = require('request')
const path = require('path')
const fs = require('fs')

const PORT = 9203
const HTTPS_PORT = 9204

const options = {
  key: fs.readFileSync(path.join(__dirname, 'certificate/private.key')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate/certificate.crt')),
  ca: fs.readFileSync('certificate/ca_bundle.crt')
};

app.use(express.json());

app.post('/api/webhook/:room', (req, res) => {
  const room = req.params.room;

  if (room) {
    var result = `${req.body.repository.name}/${req.body.ref}\n` +
      `${req.body.commits[req.body.commits.length - 1].url}\n` +
      `Push by ${req.body.pusher.username || req.body.pusher.name}\n\n` +
      `${req.body.commits[req.body.commits.length - 1].message}`;

    console.log(result);
    sendMessage(room, result.trim());

    return res.sendStatus(200);
  }

  return res.sendStatus(400);
})

const sendMessage = (room, message) => {
  const options = {
    uri: 'http://cpplove.iptime.org:9200/send',
    method: 'POST',
    body: {
      password: "4321",
      room: room,
      message: message
    },
    json: true
  }
  request.post(options, function (error, response, body) {
    //post callback
  });
}

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})

https.createServer(options, app).listen(HTTPS_PORT, () => {
  console.log(`app listening at https://localhost:${HTTPS_PORT}`)
})