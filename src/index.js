const https = require('https');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { parse } = require('./message-parser');
const { sendMessage } = require('./message-sender');

const PORT = 9203;
const HTTPS_PORT = 9204;

const options = {
  key: fs.readFileSync(path.join(__dirname, 'certificate/private.key')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate/certificate.crt')),
  ca: fs.readFileSync('certificate/ca_bundle.crt'),
};

app.use(express.json());

app.post('/api/webhook/:room', (req, res) => {
  const room = req.params.room;

  if (room) {
    const result = parse(req.body);

    console.log(result);
    sendMessage(room, result.trim());

    return res.sendStatus(200);
  }

  return res.sendStatus(400);
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});

https.createServer(options, app).listen(HTTPS_PORT, () => {
  console.log(`app listening at https://localhost:${HTTPS_PORT}`);
});
