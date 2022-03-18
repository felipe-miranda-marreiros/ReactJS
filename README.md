![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![iamge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![image](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white) ![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![image](https://img.shields.io/badge/semantic%20ui%20react-35BDB2?style=for-the-badge&logo=semanticuireact&logoColor=white)

# React JS

É uma biblioteca do JavaScript para construir interfaces. Ela é composta pelos seguintes conceitos:

* **Declarativo**: nos permite criar interfaces sem nos preocupar em mexer com DOM diretamente. <br> Isso significa: não precisamos nos preocupar em dizer passo a passo como DOM deve se comportar quando construímos interfaces. Precisamos dizer apenas como o resultado será e não como chegar no resultado.

* **Component-Based**: cada parte de uma interface é feita pela reunião de components. Cada component possui seu próprio espaço, state e lógica. Um component pode ser uma Classe ou Função.

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

* **node_modules** é a pasta que contém todos as dependências do projeto como React e ReactDOM.
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
let div = document.createElement("div");
root.append(div);
```

## Fundamentos - O que é JSX?

**JavaScript XML (JSX)** é uma forma de exibir templates para o desenvolvedor ter melhor compreensão do código que está sendo produzido. JSX permite inserir a mesma sintaxe do HTML no React, no entanto, essa sintaxe não é válida para navegadores e é aqui que Babel faz essa conversão. Babel não só converte JSX como também permite a conversão de ES6+ para ES5, permitindo que navegadores mais antigos possam reconhecer funcionalidades mais modernas do JavaScript.

**Em resumo, JSX é uma função que retorna um objeto contendo propriedades relevantes para o React renderizar no navegador.**

No final, o que estaremos enviando para o navegador é uma versão do Babel de JavaScript, pois os navegadores não reconhecem a sintaxe JSX.

```html

<h1>My Header</h1>
<p>My paragraph</p>
<button>My button</button>
```

### Extensão JS vs JSX

**JSX** não é uma extensão padrão do JavaScript. Nós usamos .JSX como extensão para componentes, enquanto .JS pode ser usado para aplicações. Não há diferença entre JSX e JS, pois no final ambos irão mostrar o mesmo resultado. É só uma questão de organização de arquivos. Em outras palavras, nomeamos arquivos JSX aqueles componentes que retornam JSX.

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

Depois de levarmos em consideração os passos acima, podemos usar ES6 Modules para tornar disponível esse component para o **index.js** e então ser renderizado pelo ReactDOM.

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
**CommentDetails** é um component. Não confundir components com variáveis. Dessa forma também estamos fazendo **Nesting**.

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

#### Multiplos Props

Levando em consideração que Props são objetos, podemos passar multiplas propriedades.

```js
const CommentDetails = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar}></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.post}</div>
      </div>
    </div>
  );
};
```

**props.avatar, props.author, props.post, props.timeAgo** são multiplas propriedades sendo passadas para o component.

#### Props.Children

Em JSX, expressões que contém opening tag e closing tag, o conteúdo dentro dessas tags é passado com um Prop especial: **props.children**.

Um component que tem children elements (que possui outros components dentro) é sempre identificado com opening e closing tag.

```js
<ApprovalCard />
```

No exemplo acima, é um component com self-closing tag. Components podem ou não apresentar outros components dentro de si, pois React permite essa interação. Em outras palavras, no futuro esse component pode receber children elements.

```js
<ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:45PM"
          post="Nice blog post!"
          avatar={faker.image.avatar()}
        />
</ApprovalCard>
```
Agora **ApprovalCard** possui um novo elemento chamado **CommentDetails**. Se quisermos que o conteúdo de **CommentDetails** seja exibido dentro do **ApprovalCard**, usamos props.children.

```js
const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};
```
<hr>

#### Props em Multiplos Components

Podemos passar Props para multiplos Components.

![Code_PxFM8gqzJr](https://user-images.githubusercontent.com/91689754/158263722-642d2a1c-a7e7-467f-904f-03ec14a8be49.png)

A propriedade expenses[0].date será usada no atributo date do component **ExpenseItem**.

![Code_R1Zpig9B6X](https://user-images.githubusercontent.com/91689754/158264548-8f0359ab-b860-4913-831a-9ecd2ef85fa9.png)

Agora que **props** possui o dado de **expenses[0].date**, podemos passar para outro component, **ExpenseDate** como atributo também.

![image](https://user-images.githubusercontent.com/91689754/158265562-9906ce75-ea70-4876-9631-9bcba71841ec.png)

Em suma, a propriedade expenses[0].date viajou do App(), passou por ExpenseItem e chegou no ExpenseDate. Tudo graças ao deus JavaScript.

## Components - Class Components e Function Components

React atualmente é divido em duas formas:

* **Class Components**

 1. pode produzir **JSX** para mostrar conteúdo para o usuário;
                 
 2. pode usar o **Lifecycle Method** para rodar código em um momento especifico da aplicação;

 3. pode usar **State** para atualizar o conteúdo do usuário.

Exemplo de Class Component:

![image](https://user-images.githubusercontent.com/91689754/158881048-49225c05-cb21-4998-93c4-b6226ac93a49.png)

                    
* **Function Components**:

1. pode produzir **JSX** para mostrar conteúdo para o usuário;
                     
2. pode usar **Hooks** para rodar código em um momento especifico da aplicação;
       
3. pode usar **Hooks** para atualizar o conteúdo do usuário.

Exemplo de Function Component:

![image](https://user-images.githubusercontent.com/91689754/157948373-32138653-074f-408a-81b3-0b0a2ca49bdb.png)

### Regras para construir Class Components

* Deve ser uma **classe JavaScript**;
* Deve ser uma **subclass** (extend) do React.Component;
* Deve definir um método **render** que retorna **JSX**.

#### Regras de State

* State é um Objeto que contém dados relevantes para um Component e só pode ser usado em Class Components. 
* Atualizar o "state" em um component causa a renderização desse componenet.
* State deve ser iniciado quando o component é criado.
* Além disso, **State só pode ser atualizado usando a função SETSTATE**.

#### Atualizando o State

**State** é um Objeto que contém dados relevantes para um Component. Em Class Components, quando um valor do Objeto State muda, a renderização do Component também muda.

Pelo fato de usarmos ES6 Classes e pelo uso da criação de uma SubClass, precisamos seguir algumas regras:

1. Usar Constructor();
2. Usar Super();

```js
//Keyword Extends
class App extends React.Component {
  
  //Constructor Method
  constructor(props) {
  
  //Super Method
    super(props);
    
    //A Criação do State e o dado que será relevante para criação desse Component.
    //Nós colocamos a propriedade desse Objeto State como Null, pois não sabemos ainda o dado que irá ocupar essa propriedade.
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
      
      //Agora que sabemos qual dado será usado no Component, usamos o método setState para reatribuir o valor do State.
      //No caso abaixo, lat terá o valor de position.coords.latitude em vez de Null.
        this.setState({ lat: position.coords.latitude });
      },
      (error) => console.log(error)
    );
  }

//Cada Class Component deve conter obrigatoriamente um método render(). 
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}
```

Em Vanilla JavaScript, nós poderiamos fazer algo como:

```js
this.state.lat = position.coords.latitude
```

Mas em React, usamos **setState** para isso acontecer.

Quando atualizamos State, nós estamos, na verdade, fazendo um Shallow Merge.

Por exemplo, temos um State como:

```js

this.state = {
      name: {
        firstName: "Felipe",
        lastName: "Miranda",
      },
 }; 
```

Se usarmos setState para atualizar:

```js

this.setState({ name: "Paulo" })

```

Fazendo isso, estaremos sobrescrevendo State completamente, ocasionando erro. Se quisermos mudar a propriedade firstName:

```js

this.setState({ name: { firstName: "Paulo" } })

```

#### Component Lifecycle

Components são estruturados da seguinte forma em Class Components:

1. **constructor** - lugar responsável por iniciar métodos apenas uma vez.

1. **render** - lugar responsável por apenas mostrar JSX.

Cada component em React tem um ciclo de vida pelo  qual podemos monitorar e manipular durante suas três principais fases:

1. **componentDidMount** -  lugar destinado para carregar dados.

2. **componentDidUpdate** - lugar destinado para carregar mais dados quando state/props mudam.

3. **componentWillUnmount** - lugar destinado para uso de bibliotecas externas.

#### Benefícios de usar Class Components

* Facilidade em organização de código;
* Possui Lifecycle Events - facilitando processos quando o App é inicializado pela primeira vez;
* Pode usar **state** - facilidade em lidar com User Input.

<hr>

## Handling Events

Handling Events em React é bastante similar com DOM Handling Events. A sintaxe, no entanto, muda:

* Eventos em React são feitos em **camelCase**, enquanto em HTML são feitos em lowercase.

```html
<!-- HTML-->

<button onclick="activateLasers()">
  Activate Lasers
</button>

```
* Com JSX, nós passamos uma função como Event Handler em vez de uma string.

```js
//React

<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Outro exemplo usando Class Component:

```js

class SearchBar extends React.Component {

//Função que será passada como Callback Function
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            
            //Event Handle
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
```

Podemos passar funções como Callback Functions no Event Handle diretamente no JSX com Arrow Function.

```js

<input type="text" onChange={(e) => console.log(e.target.value)}/>
```

### Controlled e Uncontrolled Elements

* **Controlled Components** são aqueles que dados de um Form são manipulados pelo state do Component. Por exemplo:

```js
class SearchBar extends React.Component {

{/* state (objeto) do component que guardará o valor do input*/}
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              
              {/* Guardando o valor do input na propriedade term do state*/}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

```

Em vez do DOM controlar o valor do input. React salvará o valor no **state** e só React irá manipular esse valor, bem como futuramente validar.

* **Uncontrolled Components** são iguais a Forms feitos em HTML tradicional. Nós não salvamos o valor de um input, por exemplo, em nenhum lugar do Component.

## Keys

Key é a forma de identificar elementos únicos, permitindo que React observe qual elemento foi atualizado, adicionado ou removido. É usado quando criamos elementos dinamicamente como listas. Sem Keys, React pode confundir elementos e mutar incorretamente um elemento que não deveria. Além disso, Keys devem ser únicas e estáticos. 

```
Each child in a list should have a unique "key" prop.
```

O erro acima acontece em elementos quando Higher Order Array Methods são utilizados.

![image](https://user-images.githubusercontent.com/91689754/158287168-92c2c720-62b7-4631-9d85-eb3d9103de9b.png)

No exemplo acima, é utilizado index da array como key.

## Higher Order Array Methods em React

Métodos como Map podem ser usados para exbir React Elements de maneira auto-sustentável, sem precisarmos adicionar elementos manualmente. Por exemplo, podemos converter uma array com dados relevantes em uma array de JSX.

![image](https://user-images.githubusercontent.com/91689754/158598410-353c6e99-91b3-446f-b46a-9999506c8a0b.png)

No exemplo acima, usamos Map no **jokesData** e retornamos um component **joke** com todas as informações relevantes, sem precisar repetir o código manualmente.

Outro exemplo com busca dinamica usando Filter e Map.

![image](https://user-images.githubusercontent.com/91689754/159017370-6df9f1e6-a058-4a7e-b1b6-31b10506f357.png)


## Conditional Rendering com Short Circuit

É possível renderizar partes de um component ou todo um component dependendo do estado da aplicação. Para isso, usamos Conditional Rendering com Short Circuit.

![image](https://user-images.githubusercontent.com/91689754/158688169-a58c935f-5375-44d5-a587-68c47ef32764.png)

Colocamos o elemento dentro de chaves e usamos uma condição.
