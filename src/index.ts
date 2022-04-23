import fs from 'fs';
import https from 'https';
import express from 'express';
import { parse } from './message-parser';
import { sendMessage } from './message-sender';
import * as config from './config';

const app = express();

const PORT = 9203;
const HTTPS_PORT = 9204;

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

if (config.USE_HTTPS) {
  const options = {
    key: fs.readFileSync(process.env.SSL_KEY_FILE ?? 'certificate/private.key'),
    cert: fs.readFileSync(
      process.env.CERT_FILE ?? 'certificate/certificate.crt',
    ),
    ca: fs.readFileSync(
      process.env.CA_BUNDLE_FILE ?? 'certificate/ca_bundle.crt',
    ),
  };

  https.createServer(options, app).listen(HTTPS_PORT, () => {
    console.log(`app listening at https://localhost:${HTTPS_PORT}`);
  });
}
