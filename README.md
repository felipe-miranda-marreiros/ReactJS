![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![iamge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![image](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white) ![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

# React JS

Meus estudos com React JS. </br> Requisitos: HTML, CSS/SASS, ES6+.

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

Além disso, React trabalha com o conceito de components. Um component pode ser uma **Função** ou **Classe**. Ambas podem produzir "HTML" para serem exibidos no navegador, usando **JSX** e dessa forma também utiliza **Event Handlers**(click, drag, por exemplo) do usuário como feedback.

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
root.innerHTML = "<div>Hi there!</div>";
```

## Fundamentos - O que é JSX?

**JavaScript XML (JSX)** é uma forma de exibir templates para o desenvolvedor ter melhor compreensão do código que está sendo produzido. JSX permite inserir a mesma sintaxe do HTML no React, no entanto, essa sintaxe não é válida para navegadores e é aqui que Babel faz essa conversão. Babel não só converte JSX como também permite a conversão de ES6+ para ES5, permitindo que navegadores mais antigos possam reconhecer funcionalidades mais modernas do JavaScript.

No final, o que estaremos enviando para o navegador é uma versão do Babel de JavaScript, pois os navegadores não reconhecem a sintaxe JSX.

```html

<h1>My Header</h1>
<p>My paragraph>
<button>My button</button>
```

### JSX com Inline Style e Internal Style

Mesmo que JSX se assemelhe com HTML, funções como Inline Style ou Internal Style não funcionarão da mesma forma em React. Existe também uma diferença de sintaxe quando o assunto é styling. A mesma coisa acontece com a atribuíção de Classes. Todos possuem sintaxe diferentes do padrão HTML.

#### Exemplo de Inline Style

```html
<!--HTML-->

<div style="background-color:red;"></div>
```

```js
//JSX

<div style={{backgroundColor:"red"}}></div>
```

Ainda usamos style em JSX, porém colocamos a propriedade do CSS em duas chaves e desta vez usamos camelCase. A primeira chave diz ao JavaScript que se trata de uma variável, a segunda é a forma do React usar Inline Style. É apenas um objeto com a propriedade backgroundColor e o valor "red" em forma de string.

Pressumo que seja mais ou menos assim com DOM e JS:

```js

document.getElementsByTagName("div").style.backgroundColor = "red";
```

### JSX com Classes

Em HTML teriamos algo como:

```html

<label class="label" for="name">
```

Em JSX teriamos algo como:

```js
<label className="label" for="name">
```

Isso porque **class** é uma palavra reservada em JavaScript para ES6 Classes, então usamos ClassName em vez. Tudo em camelCase.

### JSX com Variáveis

Podemos passar variáveis pelo JSX usando chaves.

```js
function getButtonText() {
  return "click on me!";
}

//Create a React Component

//Function Component
const App = () => {
  //JSX
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};
```

No exemplo acima, passamos uma função getButtonText() para o botão em JSX.

### JSX com Objetos

Em JSX, não podemos passar todo um objeto como variável, porém podemos passar normalmente suas propriedades, como por exemplo:

```js
//Function Component
const App = () => {
  //Objeto
  const buttonText = { content: "Click" };
  
  //JSX
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.content}
      </button>
    </div>
  );
};
```

## Fundamentos - Components e Props

Existem três conceitos de components em React:

* Component **Nesting** - um component pode ser exibido dentro de outro component;
* Component **Resuability** - nós queremos fazer components que possam ser reutilizados;
* Component **Configuration** - um component deve se adequar a novos contextos.

### Criando um Component

Com os três conceitos em mente, precisamos seguir algumas regras para isso acontecer:

1. Identificar JSX que aparecem **duplicados**;
2. Criar um novo arquivo para esse JSX com um nome **descritivo**, por exemplo, "CommentDetails" em **PascalCase**.
3. Por último, fazer desse Component adaptável em novos contextos usando **Props**.

Depois de levarmos em consideração os passos acima, podemos usar ES6 Modules para tornar disponível esse component para o ***index.js** e então ser renderizado pelo ReactDOM.

Components são tratados como JSX ou tags em React. Por exemplo:

```js
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails />
    </div>
  );
};
```
**CommentDetails** é um component. Não confundir components com variáveis. Dessa forma também estamos fazendo **Nesting**

### Props

Props ou Propriedades é um sistema do React que permite passar dados de um Parent Component para o Child Component. Isso entra no conceito de **Component Configuration** que permite que nosso component construa dinamicidade e seja reutilizável.

Exemplo do uso de Props:

```js
<CommentDetails author="Jane" />
```
O atributo **author** é uma propriedade que recebe uma string. No Parent Component temos:

```js
const CommentDetails = (props) => {

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};
```

Pelo fato de Components serem Funções, podemos passar nos parâmetros um variável-local chamada **props**. Essa variável-local é na verdade um objeto, por isso usamos **props.author** para ter acessa a propriedade do Child Component. 
