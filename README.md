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

