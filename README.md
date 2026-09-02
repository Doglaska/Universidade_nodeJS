# 1 etapa do desenvolvimento com nodeJS

Instalar

- node 
``npm init -y``

- npm
``npm install express``

## Como funciona

• require("express") Carrega o módulo Express instalado via npm.

• express() Cria a aplicação (instância do servidor).

• app.use(express.json()) Middleware que permite ao Express interpretar corpos de requisição em formato JSON.

• app.get("/rota", ...) Define uma rota GET, que responde com um HTML simples contendo "Hello World".

• app.post("/rota", ...) Define uma rota POST, que responde com um JSON contendo uma mensagem e o status 200.

• app.listen(PORT, ...) Coloca o servidor para "escutar" requisições na porta 3000

## Executar
``node index.js``
