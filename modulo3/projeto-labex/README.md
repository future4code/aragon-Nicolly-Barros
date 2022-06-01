# Projeto LabeX - Space Tour

 - link surge: https://spacetour.surge.sh/

## Objetivo do projeto:

- Neste projeto, trabalhamos com os novos conteúdos apresentados ao longo da semana. Os conteúdos fornecidos envolveram os conceitos de rotas (React-Router-Dom), autenticação/autorização (Authentications) e também Custom Hooks, onde através da utilização da API chamada LabeX, fomos capazes de gerenciar um sistema de viagens espaciais. Esta permitirá que vocês utilizem recursos como exibição de viagens, candidatura, criação e remoção de novas viagens, além de separação de área de acesso como administrador.

## Funcionalidades básicas proposta: 

- O projeto deve ser dividido em duas áreas de acesso: uma área pública e uma área administrativa (apenas usuários autorizados tem acesso).
- Área pública: Esta parte do projeto é composta por uma página inicial, onde é exibido uma lista de todas as viagens cadastradas no sistema, além de um formulário de candidatura para uma viagem e seção de login (para acesso à área administrativa).
- Área administrativa: Esta parte do projeto é composta por duas páginas: uma página inicial de admin e uma página de detalhes de viagem.
- Página inicial de admin: Contém uma lista de todas as viagens, um formulário de criação de novas viagens e também botão de logout do sistema (voltar para área pública);
- Página de detalhes: Contém os detalhes de uma viagem selecionada, exibindo uma lista de candidatos a serem avaliados (aprovados ou reprovados) e também uma lista de candidatos aprovados.
- Na área inicial de admin, cada viagem da lista exibida deve possuir 2 botões: um para acesso à página de detalhes e outro para remoção desta viagem.
- Por fim, uma página de erro deve ser implementada para caso o usuário tente navegar para uma rota de endereço inexistente.

## Funcinalidades extras

- Criação da tela de login.
- Possível ocultar secção de cadastro de viagem e de inscrição.

## Ferramentas utilizadas:

- React hooks
- Custom hooks
- Styled components
- React Router
- systems designs (MUI)
