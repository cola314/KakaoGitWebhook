FROM node:14

# 환경변수
ENV SSL_KEY_FILE    /certificate/private.key
ENV CERT_FILE       /certificate/certificate.crt
ENV CA_BUNDLE_FILE  /certificate/ca_bundle.crt
ENV USE_HTTPS       0

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .

# 타입스크립트 빌드
COPY tsconfig.json ./
RUN npm run build

EXPOSE 9203
EXPOSE 9204

CMD [ "npm", "start" ]