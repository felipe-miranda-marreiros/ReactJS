![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![iamge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![image](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white) ![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

# React JS

## Fundamentos - Criação de um novo ambiente

Criar um novo ambiente em React

```
npx create-react-app <nome-do-projeto>
```

Quando a linha de código **create-react-app** é executada, bibliotecas como Webpack, Babel e Webpack Dev Server são configuradas automaticamente.

<hr/>

Ao terminar de configurar, teremos a seguinte estrutura de pastas:



```
my-app/
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ robots.txt
├─ src/
│  ├─ index.css
│  ├─ index.js
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ README.md
```

* **node_modules** é a pasta que contém todos as dependências do projeto.
* **public** é a pasta que guarda todos os arquivos estáticos como imagens, index.html. São arquivos que nunca serão alterados.
* **src** é a pasta que nós colocamos todos os códigos fontes que escrevemos.
* **package.json** é o arquivo JSON que grava todas as dependências e configura nossos projetos.
* **package-lock.json** é o arquivo JSON que grava exatamente todas as versões dos pacotes que já instalamos.

<hr/>

### ES6 Modules

React utiliza Import e Export para ter melhorar organização de arquivos em seu ambiente de desenvolvimento, por exemplo:

```js
//Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";
```

### Components

Além disso, React trabalha com o conceito de components. Um component pode ser uma **Função** ou **Classe**. Ambas podem produzir HTML para mostrar para usuário, usando **JSX** e dessa forma também utiliza **Event Handlers**(click, drag, por exemplo) do usuário como feedback.

#### Exemplo de Function Component

```js
//Create a React Component

//Function Component
const App = () => {
  //JSX
  return <div>Hi there!</div>;
};
```

Exemplo acima é feito com Arrow Function.

#### Utilizando ReactDOM

Quando o Component estiver pronto, exibiremos para o usuário da seguinte forma:

```js
//Take the React Component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
```

O ID **#root** vem do arquivo **index.html** que está localizado na pasta **public**. É uma **div** vazia que futuralmente será preenchida pelo Function Component acima.

Eu pressumo que seja o mesmo que usar innerHTML.

```js
const root = document.querySelector("#root");
root.innerHTML = <div>Hi there!</div>;
```
