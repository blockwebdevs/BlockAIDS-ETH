## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

- Create a database and add access on PostgreSQL

> You can
> use [this guide](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)

```bash
# Create .env file and add database credentials
$ cp .env.example .env
```

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
