# Projeto Lama
- Projeto proposto para praticar testes unitários. 

## API - Postman
- link: 

## Surge - Heroku
- link: 

## Autor
- gitHub: https://github.com/NicolyBarros

## Instalação das dependências
- npm install : Instala as dependências utilizadas no desenvolvimento do projeto.
- Para conferir as dependências consultar arquivo 'package.json'.

## Criando e preenchenco arquivo .env
- Criar o arquivo .env e configurar com as informações de seu banco de dados.

PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados

JWT_KEY = senha
JWT_EXPIRES_IN = duração do token

BCRYPT_SALT_ROUNDS = 12 (padrão é 10/12)

## Popular tabelas
- npm run migrations: Cria e popula as tabelas no banco de dados com base no arquivo data.ts.

## Executar o projeto
- npm run dev: Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor localhost toda a vez que o projeto for alterado e salvo.

## Funcionalidades básicas

### Endpoint 1) Signup
Endpoint de signup para cadastrar novos usuários. Ele deve receber o name, email e password do novo usuário. Em sucesso, retorna uma mensagem e também um token de acesso que guarda o id e a role da pessoa.

Validações e Regras de Negócio do endpoint:

- name, email e password devem ser fornecidos e serem do tipo string
- name deve possuir ao menos 3 caracteres, enquanto password ao menos 6 caracteres
- email deve ter um formato válido e único, não podendo repetir no banco de dados

### Endpoint 2) Login
Endpoint chamado de login para logar de usuários já cadastrados. Ele deve receber o email e o password da pessoa, e em caso de sucesso retorna a mensagem e o token de acesso.

Validações e Regras de Negócio do endpoint:

- email e password devem ser fornecidos e serem do tipo string
- password deve possuir ao menos 6 caracteres
- email deve ter um formato válido
- O usuário com o e-mail fornecido deve existir no sistema

### Endpoint 3) Create show
Endpoint protegido que cria um show. Somente admins podem utilizá-lo.

Validações e Regras de Negócio do endpoint:

- a data do show não pode ser anterior ao início do festival (5 de dezembro)
- só pode existir um show por dia durante o evento

### Endpoint 4) Get shows
Endpoint público que retorna todos os shows.

Validações e Regras de Negócio do endpoint:

- dentre as informações dos shows vindas do banco de dados, deve existir também o número de ingressos disponíveis de cada um

### Endpoint 5) Buy ticket
Endpoint protegido que cria a reserva de um ingresso.

Validações e Regras de Negócio do endpoint:

- id do show reservado deve existir no banco de dados
- uma mesma pessoa só pode reservar um ingresso para cada show
- deve ser respeitado o limite de 5000 ingressos por show

### Endpoint 6) Delete ticket
Endpoint protegido que deleta a reserva de um ingresso. Admins podem deletar qualquer reserva enquanto contas normais só podem deletar suas próprias.

Validações e Regras de Negócio do endpoint:

- id do show reservado deve existir no sistema
- a pessoa já deve ter reservado o ingresso
