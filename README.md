## Description
Backend para salvar os resultados de quizes em um banco de dados

Esta api foi desenvolvida usando o framework [NestJs](https://github.com/nestjs/nest) e [Mongoose MongoDB ODM](https://mongoosejs.com/) 

## Installation
Antes de começar, certifique-se de ter o gerenciador de pacotes PNPM instalado globalmente. Você pode instalá-lo via npm ou yarn, caso ainda não tenha:
```bash
$ npm install -g pnpm
```

Depois de ter o PNPM instalado, você pode instalar as dependências do projeto executando o seguinte comando:
```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Swagger documentation
Para conferir os registros feitos pela API, acesse o seguinte endereço com esta aplicação em execução,
em seguinda execute as rotas disponíveis para teste dos endpoints da API

```bash
$ http://localhost:8080/api
```
