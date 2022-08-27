import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.dev' });
}

function isTrue(env: String) {
  if (!env) return false;
  if (["", "0", "false"].includes(env.trim())) return false;
  return true;
}

// 환경변수
export const DEV_ENV = process.env.DEV_ENV;

export const KAKAO_BOT_SERVER_API = process.env.KAKAO_BOT_SERVER_API;
export const KAKAO_BOT_API_KEY = process.env.KAKAO_BOT_API_KEY;

export const USE_SECRET = isTrue(process.env.USE_SECRET);
export const SECRET = process.env.SECRET;

// 테스트 전용
export const TESTER = process.env.TESTER;

// 단순 상수
export const HTTP_PORT = 9203;
export const HTTPS_PORT = 9204;
