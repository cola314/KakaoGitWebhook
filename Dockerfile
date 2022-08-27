FROM node:16 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16

# 환경변수
ENV NODE_ENV        production

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=build /app/dist dist

EXPOSE 9203
EXPOSE 9204

CMD [ "npm", "start" ]