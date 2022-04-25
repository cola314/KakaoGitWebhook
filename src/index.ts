import fs from 'fs';
import https from 'https';
import express from 'express';
import { parse } from './message-parser';
import { sendMessage } from './message-sender';
import * as config from './config';

const app = express();

app.use(express.json());

app.post('/api/webhook/:room', (req, res) => {
  const room = req.params.room;

  if (room) {
    const result = parse(req.body);

    console.log(result);
    sendMessage(room, result);

    return res.sendStatus(200);
  }
  return res.sendStatus(400);
});

app.listen(config.HTTP_PORT, () => {
  console.log(`app listening at http://localhost:${config.HTTP_PORT}`);
});

if (config.USE_HTTPS) {
  const options = {
    key: fs.readFileSync(config.SSL_KEY_FILE),
    cert: fs.readFileSync(config.CERT_FILE),
    ca: fs.readFileSync(config.CA_BUNDLE_FILE),
  };
  https.createServer(options, app).listen(config.HTTPS_PORT, () => {
    console.log(`app listening at https://localhost:${config.HTTPS_PORT}`);
  });
}
