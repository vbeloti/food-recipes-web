[![Coverage Status](https://coveralls.io/repos/github/vbeloti/food-recipes-web/badge.svg?branch=master)](https://coveralls.io/github/vbeloti/food-recipes-web?branch=master)
[![Build Status](https://travis-ci.org/vbeloti/food-recipes-web.svg?branch=master)](https://travis-ci.org/vbeloti/food-recipes-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# Food Recipes Web

- [Food-recipes-web]
    - [Resumo](#resumo)
    - [Link Demonstração](#link-demonstracao-api)
    - [Demonstração em Fotos](#demonstracao-em-fotos)
    - [Pré Requisitos](#pre-requisitos)
    - [Observações](#pre-requisitos)
    - [Instalando](#instalando)
    - [Executando os testes](#executando-os-teste)
    - [Configuração Inicial](#configuracao-inicial)
    - [Executando a aplicação](#executando-a-aplicacao)
    - [Recursos](#recursos)

<!-- ## Link -->


## Resumo

Esta é uma aplicação construída com Typescript + React.js, foi desenvolvida baseado na API <a href="https://github.com/vbeloti/food-recipes-api">Food Recipes API</a>. Com essa aplicação é possíve fazer login e cadastro de usuário, criar, editar, e apagar uma receita, CRUD completo.

## Link Demonstração

<a href="https://food-recipes-web.herokuapp.com/">https://food-recipes-web.herokuapp.com/</a>

## Demonstração em fotos

<img src="https://github.com/vbeloti/food-recipes-web/blob/master/.github/food-recipes-web-1.jpg?raw=true" alt="Food Recipes Web" />
<img src="https://github.com/vbeloti/food-recipes-web/blob/master/.github/food-recipes-web-2.jpg?raw=true" alt="Food Recipes Web" />
<img src="https://github.com/vbeloti/food-recipes-web/blob/master/.github/food-recipes-web-3.jpg?raw=true" alt="Food Recipes Web" />
<img src="https://github.com/vbeloti/food-recipes-web/blob/master/.github/food-recipes-web-4.jpg?raw=true" alt="Food Recipes Web" />
<img src="https://github.com/vbeloti/food-recipes-web/blob/master/.github/food-recipes-web-5.jpg?raw=true" alt="Food Recipes Web" />
<img src="https://github.com/vbeloti/food-recipes-web/blob/master/.github/food-recipes-web-6.jpg?raw=true" alt="Food Recipes Web" />
<img src="https://github.com/vbeloti/food-recipes-web/blob/master/.github/food-recipes-web-7.jpg?raw=true" alt="Food Recipes Web" />

### Pré-requisitos

Para executar este projeto, você precisará ter um ambiente mínimo para executar um aplicativo React, que pode ser encontrado <a href="https://reactjs.org/docs/getting-started.html">aqui</a>.

Você precisara instalar e configurar a API <a href="https://github.com/vbeloti/food-recipes-api">Food Recipes API</a>, pois está aplicação irá consumir todos os dados provindos da API.

## Observações

1 - As rotas '/recipes/new', '/recipes/list' não estão privadas com isso você pode visualiza-lá e tentar criar uma receita, ou edita-lá sem estar autenticado, no entanto haverá um erro dizendo 'Falha no cadastro'.
Para realizar essa ação você precisa fazer o login primeiro.

### Instalando

** Clonando o Repositório **

$ git clone https://github.com/vbeloti/food-recipes-web

$ cd food-recipes-web

** Instalando dependências **

$ yarn

_ou_

$ npm install

### Executando os testes

$ yarn test

_ou_

$ npm run test

### Configuração Inicial

Para configurar o upload das imagens existem duas opções
1º utilizar o upload local e pra isso você deverá localizar o arquivo .env.example renomeá-lo para .env a propriedade deve estar como REACT_APP_STORAGE_TYPE=local
2º utilizar o Amazon s3 e pra isso você deverá ter todas configurações na sua Food Recipes API, e e alterar REACT_APP_STORAGE_TYPE=local para STORAGE_TYPE=s3 e alterar REACT_APP_BASE_IMG_URL para a url do seu bucket

### Executando a aplicação

$ yarn start

_ou_

$ npm run start


## Recursos

| Recurso                    | Descrição                                                             |
|:--------------             |:----------------------------------------------------------------------|
| `/`                        | Lista todas as receitas                                               |
| `/login`                   | Faz a autenticação do usuário                                         |
| `/signup`                  | Cria uma nova conta                                                   |
| `/recipes/list`            | Lista todas as receitas e possibilita Editar e Excluir uma receita    |
| `/recipes/new`             | Cria uma nova receita                                                 |

