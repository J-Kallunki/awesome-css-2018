// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Table,
  TableRow,
  TableItem,
  Text,
  TableHeader,
  TableHeaderItem,
  TableBody
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./themes/default";

// Import custom component
// import Interactive from "./Interactive";

// Require CSS
require("normalize.css");
require("./themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  gofore: require("../assets/gofore/gofore_logo_white.svg"),
  spaFlow: require("../assets/spa-flow.png"),
  virtualDom: require("../assets/virtual-dom.png"),
  redux: require("../assets/redux.png"),
  reduxMiddleware: require("../assets/redux-middleware.png"),
  HOC: require("../assets/HOC.png"),
  sketch: require("../assets/todo-app-sketch.png"),
  components: require("../assets/todo-app-components.png"),
  dataFlow: require("../assets/react-data-flow.png"),
  react: require("../assets/react-logo.png"),
  reduxLogo: require("../assets/redux-logo.png"),
  jsLogo: require("../assets/js-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "#343F68",
  secondary: "white",
  tertiary: "#FF8551",
  quartenary: "#FF8551",
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
  tertiary: "monospace"
});

Heading.defaultProps = {
  textColor: "tertiary",
  size: 2,
  lineHeight: 2,
  caps: true
}
Text.defaultProps = {
  margin: "10px 0",
  size: 1,
  textAlign: "left"
}

export default class Presentation extends React.Component {
  render() {
    return (
        <Deck theme={theme} transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary" notes="Alkuvalmistelut ok? Mitä editoreita?">
            <Heading size={1} lineHeight={1} fit>React & Redux Training</Heading>
            <Heading>
              <Link href="https://gofore.com/">
                <Image width="60%" margin="40px auto 40px" src={images.gofore} />
              </Link>
            </Heading>
            <Text textAlign="center">Henri Heiskanen, Juhani Tapaninen</Text>
          </Slide>

          <Slide transition={["fade"]}>
            <Heading>Agenda - Day 1</Heading>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem textSize={40} padding="20px" caps>Morning</TableHeaderItem>
                  <TableHeaderItem textSize={40} padding="20px" caps>Afternoon</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem padding="10px">Introduction to SPAs</TableItem>
                  <TableItem padding="10px">Thinking in React: Awesome Todo App!</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px">Tooling</TableItem>
                  <TableItem padding="10px">React in action: Awesome Todo App!</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px">ES2016+</TableItem>
                  <TableItem padding="10px">React component state</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px">React introduction & JSX</TableItem>
                  <TableItem padding="10px">Data flow</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px">Hello World</TableItem>
                  <TableItem padding="10px">React Router</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px">React components</TableItem>
                </TableRow>
              </TableBody>
            </Table>
            <Image width="15%" margin="40px auto 40px" src={images.react} />
          </Slide>

          <Slide>
            <Heading>Agenda - Day 2</Heading>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem textSize={40} padding="20px" caps>Morning</TableHeaderItem>
                  <TableHeaderItem textSize={40} padding="20px" caps>Afternoon</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem padding="10px">Redux</TableItem>
                  <TableItem padding="10px">Redux Saga</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px">Immutability</TableItem>
                  <TableItem padding="10px">Unit testing</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px 0 0 0">Middleware & Async libraries</TableItem>
                  <TableItem>Bonus: Jest snapshot testing</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px"></TableItem>
                  <TableItem>Bonus: Higher Order Components</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px"></TableItem>
                  <TableItem>Bonus: Redux Form</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px"></TableItem>
                  <TableItem>Bonus: Flow typechecking</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px"></TableItem>
                  <TableItem>Bonus: Styled components</TableItem>
                </TableRow>
              </TableBody>
            </Table>
            <Image width="15%" margin="40px auto 40px" src={images.reduxLogo} />
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary" notes="kokemukset SPAsta?">
            <Heading lineHeight={1} textColor="primary">Introduction</Heading>
            <Heading size={4} textColor="primary" fit>Single Page Applications</Heading>
            <Text textAlign="center">What is a single-page application?</Text>
            <Text textAlign="center">Technical overview</Text>
            <Text textAlign="center">Real-life examples</Text>
          </Slide>

          <Slide>
            <Heading>What is a SPA?</Heading>
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                A single-page application (SPA) is a web application or web site that
                fits on a single web page with the goal of providing a more fluid user
                experience similar to a desktop application.
              </Quote>
              <Cite textColor="secondary">Wikipedia</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading>What is a SPA?</Heading>
            <Text>Browser fetches executable code that makes asynchronous calls for actual data to be shown</Text>
            <Text>Data is visualized and/or manipulated and stored back on server asynchronously</Text>
          </Slide>

          <Slide>
            <Heading fit>Technical Overview</Heading>
            <Text>Initial page load fetches index HTML and JavaScript</Text>
            <Text>JavaScript fetches the actual data via AJAX (Asynchronous JavaScript and XML). Data is usually JSON (or XML).</Text>
            <Text>JavaScript renders the data and binds event handlers for clicks, keyboard input etc.</Text>
          </Slide>

          <Slide>
            <Image src={images.spaFlow} />
          </Slide>

          <Slide>
            <Heading fit>Real-life Examples</Heading>
            <Text textAlign="center"><Link textSize={30} textColor="secondary" href="http://facebook.com">Facebook</Link></Text>
            <Text textAlign="center"><Link textSize={30} textColor="secondary" href="http://twitter.com">Twitter</Link></Text>
            <Text textAlign="center"><Link textSize={30} textColor="secondary" href="http://www.airbnb.fi">Airbnb</Link></Text>
            <Text textAlign="center"><Link textSize={30} textColor="secondary" href="http://www.instagram.com">Instagram</Link></Text>
            <Text textAlign="center"><Link textSize={30} textColor="secondary" href="http://www.google.com">Google search</Link></Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading textColor="primary">Tooling</Heading>
            <Text textAlign="center">Introduction</Text>
            <Text textAlign="center">Node.js & npm</Text>
            <Text textAlign="center">Yarn</Text>
            <Text textAlign="center">Webpack</Text>
            <Text textAlign="center">Create React App</Text>
          </Slide>

          <Slide>
            <Heading>Introduction</Heading>
            <Text>Traditionally web pages have been just static HTML, CSS and maybe some simple JS for effects, dropdowns etc.</Text>
            <Text>Nowadays massive SPAs require something more advanced -> need for tooling</Text>
            <Text>Some basic use cases for tooling</Text>
            <List>
              <ListItem>Compiling ES6/TypeScript -> ES5 and LESS/SASS/PostCSS -> CSS</ListItem>
              <ListItem>Combining multiple source files into single bundle file for faster loading</ListItem>
              <ListItem>Running test suites</ListItem>
              <ListItem>Optimizations (minification, uglification, tree shaking)</ListItem>
            </List>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Node.js & npm

Node.js is a JavaScript runtime built on top of Chrome's V8 JavaScript engine

npm (node package manager) is a built-in package manager for Node

More packages than in any other package ecosystem for any other language: over 440k (Apr 2017) ([modulecounts.com](http://www.modulecounts.com/))
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Yarn

An alternative new package manager

Uses npm registry by default

Faster, supports caching, package checksumming

Uses \`yarn.lock\` file for deterministic builds (similar to npm-shrinkwrap)

May not yet work everywhere npm does
              `}
            </Markdown>
          </Slide>

          <Slide notes="Example: ES6 --> ES5 Babel">
            <Markdown>
              {`
# Webpack

Widely used module bundler for web projects

Configurable with loaders and plugins

Handles both source code and assets like images and stylesheets

Allows you to write modular applications
              `}
            </Markdown>
          </Slide>

          <Slide notes="create-react-app todo-app && leiki vähän aikaa demoten webpackia && näytä ejectoitu versio">
            <Markdown>
              {`
# Create React App

Command-line interface for creating a React app with no configuration

Usage with create-react-app command
              `}
            </Markdown>
            <CodePane lang="bash">
{`$ create-react-app my-app
$ cd my-app/
$ npm install
$ npm start`}
            </CodePane>
            <Markdown>
              {` React app now running on http://localhost:3000/ `}
            </Markdown>
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading textColor="secondary" lineHeight={2}>
              ES2016+
            </Heading>
            <Image width="15%" margin="40px auto 40px" src={images.jsLogo} />
          </Slide>

          <Slide>
            <Markdown>
              {`
# ES2016 (ES7)

The as-yet most recent iteration of the ECMAScript specification.

Published in June 2016

Small release

New features:
- \`Array.prototype.includes\`
- Exponentiation operator

However, ES6 (ES2015) provided lots of improvements on good old ES5              `}
            </Markdown>
          </Slide>

          <Slide>
            <Markdown>
              {`
# ES6 - Key Features

\`let\` and \`const\` to replace \`var\`

Arrow functions

Modules

Template strings

Destructuring

Promises

API augmentations for basic types such as \`includes()\` for \`String\` and \`find()\` for \`Array\`
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Heading fit>Problem: Variable Hoisting</Heading>
            <Markdown>
              {`
Totally unexpected behavior called variable hoisting
              `}
            </Markdown>
            <CodePane lang="javascript">
{`
  var x = 1;

  function printSomething() {
    console.log(x);
    var x = 2;
    console.log(x);
  }

  printSomething();

  // prints:
  // undefined
  // 2
`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading fit><Code>let</Code> and <Code>const</Code> </Heading>
            <Markdown>
              {`
\`let\` and \`const\` variables are limited in scope to the nearest block they are used in

\`let\` declares a variable (eg. \`let myVar = 'asd'\`)

\`const\` declares a constant **reference** (!= constant value)
              `}
            </Markdown>
            <CodePane lang="javascript">
{`const input = [0, 1, 2, 3, 4];
input = []; // Syntax error: Assignment to constant variable.
input.push(5); // Works, as input is just the reference`}
            </CodePane>
            <Markdown>
              {`
For immutable objects & arrays there are libraries such as [_Immutable.js_](https://facebook.github.io/immutable-js/).

**Rule of thumb: Always use \`const\` if possible, \`let\` otherwise.**
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Heading fit>Problem: <Code>this</Code> is not lexical</Heading>
            HTML
            <CodePane lang="html">
{`<button>Do something</button>`}
            </CodePane>
            JavaScript
            <CodePane lang="javascript">
{`var user = {
    data: 'foo',
    clickHandler: function (event) {
      console.log(this.data);
    }
};

document.querySelector('button').addEventListener('click', user.clickHandler); // undefined
document.querySelector('button').addEventListener('click', user.clickHandler.bind(user)); // foo`}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Arrow functions

Lexical \`this\` and nicer syntax

Traditional function
              `}
            </Markdown>
            <CodePane lang="javascript">
{`const func = function (param1) {
  return param1 + 1;
};          `}
            </CodePane>
            <Markdown>
              {` Arrow function `}
            </Markdown>
            <CodePane lang="javascript">
{`const func = (param1) => {
  return param1 + 1;
};`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>
              Arrow functions
            </Heading>
            <Markdown>
              {` Parentheses can be omitted when there's just one parameter `}
            </Markdown>
            <CodePane lang="javascript">
{`const func = param1 => {
  return param1 + 1;
};`}
            </CodePane>
            <Markdown>
              {` Curly brackets and \`return\` can be omitted if only single expression is returned `}
            </Markdown>
            <CodePane lang="javascript">
{`const func = param1 => param1 + 1;`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>Modules</Heading>
            <Text>Allows <Code>import</Code> and <Code>export</Code> between files (modules)</Text>
            <Text><Code>lib.js</Code></Text>
            <CodePane lang="javascript">
{`export function square(x) {
   return x * x;
}
export function squareSum(x, y) {
   return Math.sqrt(square(x) + square(y));
}`}
            </CodePane>
            <Text><Code>main.js</Code></Text>
            <CodePane lang="javascript">
{`import { square, squareSum } from 'lib';
console.log(square(11)); // 121
console.log(squareSum(4, 3)); // 5`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>Template strings</Heading>
            <Text>ES5 string</Text>
            <CodePane lang="javascript">
{`const str = "SO LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG MULTILINE" +
"STRING" +
"!"`}
            </CodePane>
            <Text>ES6 multiline string with backticks (`)</Text>
            <CodePane lang="javascript">
{`const str = \`MULTILINE
STRING
!\``}
            </CodePane>
            <Text>Variable interpolation</Text>
            <CodePane lang="javascript">
{`const firstName = 'John';
const lastName = 'Doe';
const str = \`\${lastName}, \${firstName}\`;
// str = 'Doe, John'`}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Classes

Similar to other programming languages
- can have constructors and class methods
- possible to extend other classes
- still desugar down to prototypical inheritance
              `}
            </Markdown>
            <CodePane lang="javascript">
{`class Student extends Person {
    constructor(firstName, middleInitial, lastName) {
        this.fullName = firstName + " " + middleInitial + ". " + lastName;
    }
}

function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const student = new Student("Jane", "M", "User");
greeter(student);`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>
              Destructuring
            </Heading>
            <CodePane lang="javascript">
{`const obj = { a: 'foo', b: 'bar', c: 'baz' };
const { a, c } = obj;
// a = 'foo', c = 'baz'

const arr = [ 4, 20 ];
const [ hours, minutes ] = arr;
// hours = 4, minutes = 20`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading fit>Rest & spread operators</Heading>
            <CodePane lang="javascript">
{`// Rest
function sortArguments(...args) {
  return args.sort(); // args is an array of function arguments
}

sortArguments(4, 7, 1); // => [1, 4, 7]

// Spread
const arr = [ 2016, 10, 21, 13, 37 ];
const [ year, month, day, ...time ] = arr;
// time = [ 13, 37 ]

const timeWithSeconds = [ ...time, 12 ];
// timewithSeconds = [ 13, 37, 12 ]`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>Promises</Heading>
            <CodePane lang="javascript">
              {`
const mySweetPromise = new Promise((resolve, reject) => {
  // do some (probably async) stuff

  if (/* everything turned out ok */) {
    resolve(/* whatever data we just crunched */);
  } else {
    reject(Error("Things didn't work out so great.."));
  }
});

mySweetPromise
  .then(functionThatDoesSomethingFancy)
  .catch(console.error.bind(console));`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading fit>Object spread & rest operators</Heading>
            <CodePane lang="javascript">
              {`
// Spread
const user = { name: 'John', age: 37 };
const userWithEmail = { ...user, email: 'john@doe.com' };

// Rest
const { age, ...userInfo } = userWithEmail;
// age = 37, userInfo = { name: 'John', email: 'john@doe.com' }
              `}
            </CodePane>
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading textColor="primary">React basics</Heading>
            <Text textAlign="center">Introduction</Text>
            <Text textAlign="center">JSX</Text>
            <Text textAlign="center">Technical overview</Text>
            <Text textAlign="center">Stateful vs stateless components</Text>
            <Text textAlign="center">Lifecycle events</Text>
            <Text textAlign="center">Virtual DOM</Text>
            <Image width="15%" margin="40px auto 40px" src={images.react} />
          </Slide>

          <Slide>
            <Markdown>
              {`
# React

JavaScript library for building user interfaces

First release by Facebook in 2013

Provides only the V in MVC

Emphasis on declarative UI -- view is a function of state

One-way data binding

Multiple rendering targets (browser, mobile, desktop)
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Markdown>
              {`
  # Virtual DOM

  Virtual DOM is a simplified copy of HTML DOM

  Render HTML without browser DOM for client and server side

  DOM handling is abstracted away
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Heading>Virtual DOM</Heading>
            <Image height={'80%'} width={'80%'} src={images.virtualDom} />
          </Slide>

          <Slide>
            <Heading>JSX</Heading>
            <Markdown margin={'0 0 0 250px'}>
               {`
Syntax extension to JavaScript

JSX produces React "elements"

JSX compiles down into plain JavaScript
               `}
           </Markdown>
            <Layout>
              <Table>
                <tbody>
                  <TableRow>
                    <TableItem padding={'0 2% 0 0'}>
                      <CodePane lang="jsx">
{`
  function getGreeting(user) {
    if (user) {
      return (
        <h1 className="greeting">
          Hello, {formatName(user)}!
        </h1>
        );
    }
    return <h1>Hello, Stranger.</h1>;
  }
`}
                      </CodePane>
                    </TableItem>
                    <TableItem>
                      Compiles to
                    </TableItem>
                    <TableItem  padding={'0 0 0 2%'}>
                      <CodePane lang="jsx">
{`function getGreeting(user) {
  if (user) {
    return React.createElement(
      "h1",
      { className: "greeting" },
      "Hello, ",
      formatName(user),
      "!"
    );
  }
  return React.createElement(
    "h1",
    null,
    "Hello, Stranger."
  );
}`}
                      </CodePane>
                    </TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>

          <Slide>
            <Markdown>
              {`
# React

Component-based view library

\`render\` method describes the view based on \`props\` and \`state\`
- \`view = f(props, state)\`

Rerender happens when either \`props\` or \`state\` changes

Virtual DOM is used to make sure only the difference between two consecutive renders is applied to the actual DOM
`}
            </Markdown>
            <CodePane lang="jsx">
{`class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, mountNode);`}
            </CodePane>
          </Slide>

          <Slide notes={
<div>
<Text>import React from 'react'</Text>
<Text>import ReactDOM from 'react-dom'</Text>
<Text>import App from './App'</Text>
<Text>import 'bootstrap/dist/css/bootstrap.css'</Text>
<Text>import 'font-awesome/css/font-awesome.css'</Text>
<Text></Text>
<Text>ReactDOM.render(</Text>
<Text>  App /,</Text>
<Text>  document.getElementById('root')</Text>
<Text>)</Text>
</div>
            }>
            <Heading fit><Code>Hello World!</Code></Heading>
          </Slide>

          <Slide>
            <Heading fit>React components</Heading>
            <Text>Stateless functional components are basically just JavaScript functions</Text>
            <CodePane lang="jsx">
{` const App = props => <h1>Hello, {props.name}</h1>; `}
            </CodePane>

            <Text>Stateful components can hook into React's lifecycle events and store internal state that persists across renders</Text>
            <CodePane lang="jsx">
{` class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
} `}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Lifecycle events

Components have a lifecycle and related events
- Mounting: \`constructor()\`, \`componentWillMount()\`, \`render()\` and \`componentDidMount()\`
- Updating: \`componentWillReceiveProps()\`, \`shouldComponentUpdate()\`, \`componentWillUpdate()\`, \`render()\` and \`componentDidUpdate()\`
- Unmounting: \`componentWillUnmount()\`
              `}
            </Markdown>
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading textColor="primary">Thinking in React</Heading>
            <Heading lineHeight={2} size={4} textColor="primary">Todo App</Heading>
            <Text textAlign="center">What we are going to build</Text>
            <Text textAlign="center">Component structure</Text>
            <Text textAlign="center">Minimal state</Text>
            <Text textAlign="center">Data flow</Text>
          </Slide>

          <Slide>
            <Image height={'80%'} width={'80%'} src={images.sketch} />
          </Slide>

          <Slide>
            <Heading fit>Component structure</Heading>
            <Image height={'90%'} width={'90%'} src={images.components} />
          </Slide>

          <Slide>
            <Heading>Data flow</Heading>
            <Image height={'100%'} width={'100%'} src={images.dataFlow} />
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading textColor="primary">Redux basics</Heading>
            <Text textAlign="center">Introduction</Text>
            <Text textAlign="center">The concept of immutability</Text>
            <Text textAlign="center">Basic concepts</Text>
            <Image width="15%" margin="40px auto 40px" src={images.reduxLogo} />
          </Slide>

          <Slide>
            <Heading fit>When do we need state management?</Heading>
            <Markdown>
              {`
In a growing application it may become difficult to reason about application state

- Components need to share and mutate state
- Components need to share and mutate state of other components
- State needs to be accessible from everywhere

With state management you have just one place to find and update the state.
              `}
            </Markdown>
          </Slide>

          <Slide>
            <BlockQuote>
              <Quote textSize="2em" textColor="tertiary">
                A predictable state container for JavaScript apps
              </Quote>
              <Cite textColor="secondary">https://github.com/reactjs/redux</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Redux

All application state kept in a single store

State is read-only

State is updated by dispatching *actions*

Actions are plain JavaScript objects

State is mutated functionally via *reducers*

Subscribers only notified of changes to their specific slice of state
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Heading>Immutability</Heading>
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                In object-oriented and functional programming, an immutable object (unchangeable object) is an object whose state cannot be modified after it is created.
              </Quote>
              <Cite textColor="secondary">Wikipedia</Cite>
            </BlockQuote>
            <CodePane lang="javascript">
              {`
var statement = "I am immutable";
var other = statement.slice(2, 10);
              `}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>
              Redux
            </Heading>
            <Image width="90%" height="90%" src={images.redux} />
          </Slide>

          <Slide>
            <Markdown>
              {`
# Redux Glossary

Action - plain object that represents an intention to change state

Action creator - helper function that creates an action

Reducer - pure function that creates a new state object from old state based on action

Selector - pure function that selects part of the state tree

Store - object that holds the application's state tree
              `}
            </Markdown>
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading textColor="primary">Redux advanced</Heading>
            <Text textAlign="center">Redux middleware</Text>
            <Text textAlign="center">Async operations in Redux</Text>
            <Text textAlign="center">Async libraries</Text>
          </Slide>

          <Slide>
            <Heading fit>Redux middleware</Heading>
            <Markdown>
              {`
Provides an extension point between dispatching an action, and the moment it reaches the reducer

Used for logging, crash reporting, talking to an asynchronous API, routing, and more

Composable, middleware chain defined by \`applyMiddleware(...middlewares)\`

Middleware signature \`({ getState, dispatch }) => next => action\`
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Heading fit>Redux middleware</Heading>
            <Image height={'80%'} width={'80%'} src={images.reduxMiddleware} />
          </Slide>

          <Slide>
            <Heading fit>Async operations in Redux</Heading>
            <Markdown>
              {`
By default Redux stores only support synchronous data flows

Middlewares to the rescue
- redux-promise, redux-thunk, redux-saga, redux-loop, redux-cycles, redux-observable...
- Tradeoffs between expressivity vs. simplicity
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Markdown>
              {`
# redux-promise

If an action creator function returns a promise, redux-promise will dispatch the resolved value

Nothing is dispatched if the promise rejects

Works nicely together with async/await
              `}
            </Markdown>
            <CodePane lang="javascript">
              {`
createAction('FETCH_THING', async id => {
  const result = await somePromise;
  return result.someValue;
});
              `}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# redux-thunk

If action creator returns a function (eg. is a thunk) the inner function receives \`dispatch\` and \`getState\` as parameters

Can be used to delay the dispatch of an action or to dispatch conditionally
              `}
            </Markdown>
            <CodePane lang="javascript">
{`createAction('FETCH_THING', () => (dispatch, getState) => {
  var state = getState();
  var url = "https://api.github.com/users/" + state.user + "/repos";
  dispatch(loadingChangedAction(true));

  return fetch(url)
    .then(function(result) {
      dispatch(loadingChangedAction(false));
      if (result.status === 200) {
        return result.json();
      }
      throw "request failed";
    })
    .then(jsonResult => dispatch(addReposAction(jsonResult)))
    .catch(err => alert("Oops...", "Couldn't fetch repos for user: " + state.user, "error");
    });
});`}
            </CodePane>
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading textColor="primary">Redux saga</Heading>
            <Text textAlign="center">Javascript generator functions</Text>
            <Text textAlign="center">How Redux saga works</Text>
            <Text textAlign="center">Redux saga API</Text>
            <Text textAlign="center">Pros and cons</Text>
          </Slide>

          <Slide>
            <Markdown>
              {`
# redux-saga

Enables creation of long-running daemons (“sagas”) that take actions as they come

Possible to transform or perform requests before emitting new actions

Moves the logic from action creators into sagas

Declarative rather than imperative approach (unlike previous examples)

Leverages JavaScript generators (ES6 feature)
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Generators

Language feature for defining iterative algorithms by writing a single function which can maintain its own state

Defined using \`function*\` syntax, no arrow function available

Values produced using \`yield\` and \`yield*\` expressions
              `}
            </Markdown>
            <CodePane lang="javascript">
{`function* numbersFrom(n) {
  var num = n;
  while(true)
    yield num++;
}

const nats = numbersFrom(0);
console.log(nats.next().value); // 0
console.log(nats.next().value); // 1
console.log(nats.next().value); // 2`}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Generators

The \`yield*\` expression iterates over the operand and yields each value it returns
              `}
            </Markdown>
            <CodePane lang="javascript">
{`function* numberGenerator(n) {
  yield 42;
  yield 1337;
  yield* numbersFrom(2016);
}

const nats = numbersFrom(0);
console.log(nats.next().value); // 42
console.log(nats.next().value); // 1337
console.log(nats.next().value); // 2016
console.log(nats.next().value); // 2017`}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Generators

\`done\` boolean changes to true when iterator runs out
              `}
            </Markdown>
            <CodePane lang="javascript">
{`function* wordGenerator() {
  yield ['battery', 'horse'];
}

const words = wordGenerator();
console.log(words.next().value); // 'battery'
console.log(words.next().done); // false
console.log(words.next().value); // 'horse'
console.log(words.next().done); // true`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>redux-saga</Heading>
            <Text textAlign="center">Sagas are generator functions</Text>
            <Text textAlign="center">Redux store is given one root saga</Text>
          </Slide>

          <Slide>
            <Heading>redux-saga</Heading>
            <CodePane lang="javascript">
{`// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched USER_FETCH_REQUESTED action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield* takeEvery("USER_FETCH_REQUESTED", fetchUser);
}`}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# redux-saga

Plethora of effect creators and combinators:
- \`take\` - wait for a specified action
- \`takeEvery\` - spawn a saga on each matching action
- \`takeLatest\` - same as \`takeEvery\` + cancels any previously started saga
- \`call\` - call the given function with given arguments
- \`put\` - dispatch an action
- \`race\` - race between multiple effects
- many, many more...
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Markdown>
              {`
# redux-saga

Pros
- Easy to test
- Expressive
- Declarative
              `}
            </Markdown>
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading fit textColor="primary">Testing React + Redux app</Heading>
            <Text textAlign="center">Introduction to testing in general</Text>
            <Text textAlign="center">Jest</Text>
            <Text textAlign="center">Enzyme</Text>
          </Slide>

          <Slide>
            <Heading fit>Testing framework</Heading>
            <Text>Jest, Mocha, Ava, (Tape) etc...</Text>
            <Text>Loads, runs and cleans tests one by one</Text>
            <Text>Basic concept is the same for every framework</Text>
            <CodePane lang="javascript">
{`// Describe: Group related tests into a test suite
describe('App')

// It: Test a single feature
it('shows the correct text')

// Expect: Make assertions about the test target
expect(item.text().to.equal('hello world'))
`}
            </CodePane>
          </Slide>


          <Slide>
            <Markdown>
              {`
# Assertions

Check that test subject meets given passing criteria

Common format
              `}
            </Markdown>
            <CodePane lang="javascript">
{`expect(component).to.have.class('todo-item')`}
            </CodePane>
            <Markdown>
              {`
Chai (http://chaijs.com/api/)
- Supports other libraries on top of chai (eg. chai-query)

Jest has its own assertions (http://facebook.github.io/jest/docs/api.html#expect-value)
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Heading>Jest</Heading>
            <Text>Reducer test example</Text>
            <CodePane lang="javascript">
{`describe('Todos reducer', () => {
  it('should handle DATA_FETCH_COMPLETE', () => {
    const state = reducer({}, {
      type: actionTypes.DATA_FETCH_COMPLETE,
      payload: { todos }
    });
    expect(state).toEqual({todos});
  });
});`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>Enzyme</Heading>
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
              </Quote>
              <Cite textColor="secondary">https://github.com/airbnb/enzyme)</Cite>
            </BlockQuote>
            <Text>Should be compatible with all major test runners and assertion libraries</Text>
            <Text>Wraps packages like React TestUtils and JSDOM to create a simpler interface for unit tests</Text>
            <Text>API: <Code>shallow</Code> <Code>mount</Code> <Code>render</Code></Text>
            <Text><Link textSize={20} textColor="secondary" href="http://airbnb.io/enzyme/docs/api/index.html">Enzyme documentation</Link></Text>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Enzyme: shallow

Suitable for unit-testing components

Does not recursively test nested children
              `}
            </Markdown>
            <CodePane lang="javascript">
{`
  it('should render three <Foo /> components', () => {
   	const wrapper = shallow(<MyComponent />);
  	expect(wrapper.find(Foo)).to.have.length(3);
  });
`}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Enzyme: mount

Full DOM rendering

Requires DOM to be available (browser or jsdom)

For testing components that interact with the DOM or hook into component lifecycle (eg. via \`componentDidMount\`)
              `}
            </Markdown>
            <CodePane lang="javascript">
{`
  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
`}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Enzyme: render

Render components to static HTML and analyze result structure
              `}
            </Markdown>
            <CodePane lang="javascript">
{`
  it('rendered the title', () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain("unique");
   });
`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading>Jest + Enzyme</Heading>
            <Text>Simulate click events</Text>
            <CodePane lang="javascript">
{`describe('LogoutButton', () => {
  it('calls logout on button press', () => {
    const fn = jest.fn()
    const tree = shallow(
      <LogoutButton logout={fn} />
    )
    tree.find('#logoutButton').first().simulate('click')
    expect(fn).toHaveBeenCalled()
  });
});`}
            </CodePane>
            <Text textAlign="center"><Link textSize={20} textColor="secondary" href="http://facebook.github.io/jest/docs/expect.html">More Jest matchers can be found in Jest docs</Link></Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading fit textColor="primary">Bonus Material</Heading>
            <Text textAlign="center">Jest snapshot testing</Text>
            <Text textAlign="center">High order components</Text>
            <Text textAlign="center">Redux Form</Text>
            <Text textAlign="center">React Flow typechecking</Text>
            <Text textAlign="center">Styled components</Text>
          </Slide>

          <Slide transition={["zoom"]}>
            <Heading fit>Jest snapshot testing</Heading>
            <CodePane lang="javascript">
{`
  import renderer from 'react-test-renderer';

  describe('Todos', () => {
    it('renders', () => {
      const todos = renderer.create(<Todos todos={todos}/>).toJSON();
      expect(todos).toMatchSnapshot();
    });
  });
`}
            </CodePane>
            <Text textAlign="center">VS</Text>
            <CodePane lang="javascript">
{`describe('Todos', () => {
  it('should render three <Todo /> components', () => {
    const wrapper = shallow(<Todos todos={todos} />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });
  it('should render <InputBar /> component', () => {
    const wrapper = shallow(<Todos todos={todos} />);
    expect(wrapper.find(Foo)).to.have.length(1);
  });
  ...
});`}
            </CodePane>
          </Slide>

          <Slide>
            <Heading fit>Higher Order Component (HOC)</Heading>
            <Markdown>
              {`
Essentially acts as a React component factory

Adds functionality or data to an existing component
- Produces "Enhanced" components

Useful for extracting functionality that is shared by multiple components
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Heading fit>Higher Order Component</Heading>
            <Layout>
              <Fit>
                <CodePane margin={'0 100%'} lang="javascript">
                  {`connect(mapStateToProps)(Todos)`}
                </CodePane>
              </Fit>
            </Layout>
            <Image src={images.HOC} />
          </Slide>

          <Slide>
            <Markdown>
              {`
# Redux Form

Library for managing form state in Redux

Includes:
- Redux reducer that listens for dispatched Redux Form actions to maintain form state in Redux
- React component decorator that wraps your entire form in a higher-order component (HOC) and provides functionality via props
- \`Field\` component to connect your individual field inputs to Redux store
- various action creators for interacting with your forms
              `}
            </Markdown>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Flow

Static type checker for JavaScript

Heavily leverages type inference

Can be introduced gradually
              `}
            </Markdown>
            <CodePane lang="jsx">
{`// @flow
function foo(x) {
  return x * 10;
}
foo('Hello, world!'); // The operand of an arithmetic operation must be a number.`}
            </CodePane>
          </Slide>

          <Slide>
            <Markdown>
              {`
# Flow

Usage recommendations (http://djcordhose.github.io/flow-vs-typescript/2016_hhjs.html)
- if your project does not live long: no
- if your project is really simple: no
- if there's a chance you need to do some heavy refactoring later on: yes
- if you're developing a business-critical application: yes
- if people enter or leave your team frequently: yes
              `}
            </Markdown>
          </Slide>

          <Slide transition={["zoom"]}>
            <Heading fit>Styled components</Heading>
            <BlockQuote>
              <Quote textSize="1.5em" textColor="tertiary">
                Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress
              </Quote>
              <Cite textColor="secondary">https://github.com/styled-components/styled-components</Cite>
            </BlockQuote>
            <CodePane lang="jsx">
{`const Button = styled.button'
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
';`}
            </CodePane>
          </Slide>

          <Slide transition={["zoom"]}>
            <Heading fit>Styled components</Heading>
            <Text>Overriding component styles</Text>
            <CodePane lang="jsx">
{`const TomatoButton = styled(Button)'
  color: tomato;
  border-color: tomato;
';`}
            </CodePane>
          </Slide>

          <Slide transition={["zoom"]}>
            <Heading fit>Styled components</Heading>
            <Text>Theming</Text>
            <CodePane lang="jsx">
{`const GreenSection = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}`}
            </CodePane>
            <Text></Text>
            <CodePane lang="jsx">
{`const Button = styled.button'
  background: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
';
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};`}
            </CodePane>
          </Slide>

        </Deck>
    );
  }
}
