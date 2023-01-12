### Script de atualização de um banco de dados de notícias

### Como está organizado a estrutura de diretórios

Os diretórios estão organizados de forma bastante simples, sem apego a um 'design patterns' ou quais outras definições formais do desenvolvimento de softwares.

```text
|—— src/
|  |—— config/
|  |  └── firebase-config.js
|  |—— core/
|  |  └── news-io-core.js 
|  |—— repository/
|  |  └── general-repository.js
|  |—— service/
|  |  └── news-io-service.js
|  |—— triggers/
|  |  └── news-trigger.js
|  |—— utils/
|  |  └── cron.js
|  └── index.js
|—— ecosystem.config.js
|—— package.json
└── service-account-key.json
```

Para criar sua conta no firebase, siga o passo-a-passo do próprio site https://firebase.google.com/?hl=pt

Baixe a serviceAccountKey

```shell
npm i
```

```shell
npm start
```

```shell
npm i -g pm2
```

```shell
pm2 start ecosystem.config.js
```