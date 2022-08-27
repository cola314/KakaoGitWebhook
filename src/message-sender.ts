import axios from 'axios';
import * as config from './config';

export function sendMessage(room: string, message: string) {
  axios
    .post(config.KAKAO_BOT_SERVER_API, {
      apiKey: config.KAKAO_BOT_API_KEY,
      room: room,
      message: message,
    })
    .then(_ => {
      //post callback
    })
    .catch(ex => {
      console.error('error');
    });
}
