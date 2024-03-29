# Treld-blog-frontend

### Todos
- Validar usuário logado
- Validar nível de permissão do usuário atual
- Escrever testes
### Tecnologias (copiadas do Slingshot, outro dia traduzo)


| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)    |
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [Isparta](https://github.com/douglasduteil/isparta) | Code coverage tool for ES6 code transpiled by Babel. |
| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|  
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |




### Pré requisitos
* Node 4.0.0 ou mais atual
* Git

### Instalação
##### Windows
* Instalar Python 2.7
* Instalar C++ Compiler (requirido pelo Browsersync. Já vem no Visual Studio Express, se já tem instalado no seu pc: Abra o Visual Studio e clique em Arquivo -> Novo -> Projeto -> Visual C++ -> Instalar Visual C++ Tools para Windows Desktop)

##### Linux
Executar esse comando para [aumentar o limite](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) de números de linhas que o Linux pode assistir.
```sh
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

##### Mac
Não precisa XD

### Instalar dependências
Na raíz do projeto executar:
```sh
$ npm install
```

### Build para produção
Esse projeto já vem com alguns scripts pré configurados para liberação do projeto, basta executar  
```sh
$ npm run prebuild
$ npm run build
```

### Etc
- O projeto já vem com o .eslintrc configurado, utilize-o sabiamente.
- Pode utilizar qualquer editor de sua preferência, eecomendamos porém o Atom.
- Caso opite pelo Atom, instalar os pacotes: **linter, linter-eslint, minimap, minimap-highlight-selected, color-picker, highlight-selected e js-hyperclick**
- Não realizar merge na master, utilizar [pull request](https://help.github.com/articles/creating-a-pull-request/)

License
----

GPL

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
