import axios from 'axios';
import * as config from './config';

export function sendMessage(room, message) {
  axios
    .post(config.KAKAO_BOT_SERVER_API, {
      password: config.KAKAO_BOT_API_KEY,
      room: room,
      message: message,
    })
    .then(_ => {
      //post callback
    });
}
