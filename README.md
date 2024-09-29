![MovieApp](thumbnail.png?raw=true "MovieApp")

# MovieApp

MovieApp é uma aplicação web para explorar filmes e séries usando a API do [The Movie Database (TMDb)](https://www.themoviedb.org/).

## Funcionalidades

- Pesquisar filmes e séries
- Ver detalhes de filmes e séries
- Navegar por categorias populares
- Interface responsiva para dispositivos móveis

## Tecnologias Utilizadas

- React
- Redux
- React Router
- Axios
- Tailwind CSS
- TMDb API

## Pré-requisitos

- Node.js (versão 20 ou superior)
- NPM ou Yarn

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/movieapp.git
    cd movieapp
    ```

2. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API do TMDb:

    ```env
    REACT_APP_ACCESS_TOKEN=SUA CHAVE API
    ```

## Como Obter a Chave de API do TMDb

1. Crie uma conta no [The Movie Database (TMDb)](https://www.themoviedb.org/).
2. Vá para a seção de [API](https://www.themoviedb.org/settings/api) no seu perfil.
3. Clique em "Create" para gerar uma nova chave de API.
4. Copie o Token de Leitura e adicione ao arquivo `.env` conforme mostrado acima.

## Uso

### Modo Desenvolvimento

Para iniciar a aplicação em modo de desenvolvimento, execute:

   ```bash
    npm start
    # ou
    yarn start
    ```
A aplicação estará disponível em http://localhost:3000.

Build para Produção
Para criar uma build otimizada para produção, execute:

Os arquivos de build serão gerados na pasta build.

Deploy
Você pode fazer o deploy da aplicação em qualquer serviço de hospedagem estática, como Vercel, Netlify, GitHub Pages, etc.

### Estrutura do Projeto

movieapp/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BannerHome.js
│   │   ├── Card.js
│   │   ├── Divider.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── HorizontalScollCard.js
│   │   ├── MobileNavigation.js
│   │   └── VideoPlay.js
│   ├── constants/
│   │   └── navigation.js
│   ├── hooks/
│   │   ├── useFetch.js
│   │   └── useFetchDetails.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── DetailsPage.js
│   │   ├── ExplorePage.js
│   │   └── Home.js
│   ├── store/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   ├── routes/
│   └── setupTests.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

