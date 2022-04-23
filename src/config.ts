import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.dev' });
}

export const DEV_ENV = process.env.DEV_ENV;

export const USE_HTTPS = !!process.env.USE_HTTPS;
export const SSL_KEY_FILE = process.env.SSL_KEY_FILE;
export const CERT_FILE = process.env.CERT_FILE;
export const CA_BUNDLE_FILE = process.env.CA_BUNDLE_FILE;
