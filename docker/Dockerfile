# 1. Dependencies stage
FROM 704476607684.dkr.ecr.eu-west-2.amazonaws.com/docker/node:12.19-alpine3.10 as release

WORKDIR /usr/src/app

COPY ./config ./config
COPY ./src/ ./src
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./

RUN yarn install --production=true --frozen-lockfile
RUN yarn run build

# 2. Develop stage
FROM 704476607684.dkr.ecr.eu-west-2.amazonaws.com/docker/node:12.19-alpine3.10 as localdev

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn run build

EXPOSE 5050

CMD yarn start:dev
