FROM node:20

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build

CMD [ "npm", "run", "start:dev" ]