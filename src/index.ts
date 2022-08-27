import express from 'express';
import { parse } from './message-parser';
import { sendMessage } from './message-sender';
import * as config from './config';
import { IncomingHttpHeaders } from 'http';
import { isValidate } from './secret-validator';

const app = express();

app.use(express.json({
  verify: (req, res, buf) => {
    const signature = getSignature(req.headers);
    if (config.USE_SECRET && !signature) {
      throw new Error('signature header is required');
    }
    
    if (!isValidate(signature, buf.toString('utf-8')))
      throw new Error('invalid signature');
  }
}));

function getSignature(headers: IncomingHttpHeaders): string {
  if (typeof headers['x-hub-signature-256'] === "string") {
    return headers['x-hub-signature-256'].substring("sha256=".length);
  }
  if (typeof headers["x-gitea-signature"] === "string") {
    return headers["x-gitea-signature"];
  }
}

app.use((err, req, res, next) => {
  if (err) {
    res.status(400).send(err.message)
  } else {
    next()
  }
})

app.post('/api/webhook/:room', (req, res) => {
  const room = req.params.room;
  if (!room) {
    return res.status(400).send('room is required');
  }

  const result = parse(req.body);

  console.log(result);
  sendMessage(room, result);

  return res.sendStatus(200);
});

app.listen(config.HTTP_PORT, () => {
  console.log(`app listening at http://localhost:${config.HTTP_PORT}`);
});
