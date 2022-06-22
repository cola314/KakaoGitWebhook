FROM node:alpine3.16 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine3.16

# 환경변수
ENV NODE_ENV        production

ENV SSL_KEY_FILE    /certificate/private.key
ENV CERT_FILE       /certificate/certificate.crt
ENV CA_BUNDLE_FILE  /certificate/ca_bundle.crt
ENV USE_HTTPS       0

ENV KAKAO_BOT_SERVER_API=<KAKAO_BOT_API>
ENV KAKAO_BOT_API_KEY=<API_KEY>

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=build /app/dist dist

EXPOSE 9203
EXPOSE 9204

CMD [ "npm", "start" ]
