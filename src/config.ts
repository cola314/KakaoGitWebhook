import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.dev' });
}

// 환경변수
export const DEV_ENV = process.env.DEV_ENV;

export const KAKAO_BOT_SERVER_API = process.env.KAKAO_BOT_SERVER_API;
export const KAKAO_BOT_API_KEY = process.env.KAKAO_BOT_API_KEY;

// 테스트 전용
export const TESTER = process.env.TESTER;

// 단순 상수
export const HTTP_PORT = 9203;
export const HTTPS_PORT = 9204;
