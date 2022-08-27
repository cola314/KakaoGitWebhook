import crypto from 'crypto-js'
import * as config from './config'

export function isValidate(signatureSha2: string, body: string) {
    if (!config.USE_SECRET) return true;
    return signatureSha2 === getSignature(body);
}

function getSignature(body: string) {
    return crypto.HmacSHA256(body, config.SECRET).toString();
}
  