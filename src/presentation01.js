// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Table,
  TableRow,
  TableItem,
  Text,
  TableHeader,
  TableHeaderItem,
  TableBody
} from 'spectacle';

// Import theme
//import createTheme from 'spectacle/lib/themes/default';
import createTheme from './themes/default';
import { utils } from './utils';
import { images } from './images/images';
import css from './css/css';

// Require CSS
require('normalize.css');

// const theme = createTheme(
//   {
//     primary: 'white',
//     secondary: '#1F2022',
//     tertiary: '#03A9FC',
//     quartenary: '#CECECE',
//   },
//   {
//     primary: 'Montserrat',
//     secondary: 'Helvetica',
//   }
// );
const theme = createTheme(
  {
    primary: '#343F68',
    secondary: 'white',
    tertiary: '#FF8551',
    quartenary: '#FF8551',
    black: '#000000'
  },
  {
    primary: 'Montserrat',
    secondary: 'Share Tech Mono',
    tertiary: 'monospace'
  }
);

Heading.defaultProps = {
  textColor: 'tertiary',
  size: 2,
  lineHeight: 2,
  caps: true
};
Text.defaultProps = {
  margin: '10px 0',
  size: 1,
  textAlign: 'left'
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transition={['zoom', 'slide']}
        transitionDuration={500}
      >
        <Slide
          transition={['slide']}
          bgColor="black"
          notes="Remember when the CSS was awesome but the browsers weren't? Still today one of every twentyseventh user in Finland is using Internet Explorer Eleven"
        >
          <Image width="50%" margin="0 auto" src={images.ieGif} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="How many of you don't know much about CSS?"
        >
          <Heading size={1} lineHeight={1} fit>
            Would you say that
          </Heading>
          <Heading size={1} lineHeight={1} fit>
            CSS is
          </Heading>
          <Heading size={1} lineHeight={1} fit>
            Awesome?
          </Heading>
          <Appear order={1}>
            <div>
              <Text textSize={60} textAlign="right" margin="60px 0 0 0">
                Joonas Kallunki
              </Text>
              <Text textAlign="right">Visuel Developer, Frontend Stapler</Text>
              <Link href="https://gofore.com/">
                <Image
                  width="20%"
                  margin="0 -2px 40px auto"
                  src={images.gofore}
                />
              </Link>
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Appear order={1}>
            <div>
              <Heading size={2} margin="-2em 0 0 0">
                User patience
              </Heading>
            </div>
          </Appear>
          <Text textSize="1.5em" textColor="secondary">
            Time for a page to be interactive is
          </Text>
          <Text textSize="1.5em" textColor="secondary">
            smaller with UI styled by CSS than JS.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize="1.5em" textColor="primary">
              ...the browser won't render any processed content until the CSSOM
              is constructed.
            </Quote>
            <Cite>
              <Link
                href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css"
                textColor="primary"
              >
                Google Web Fundamentals
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize="1.5em" textColor="primary">
              Performance is about culture supported by tools. Browsers optimize
              HTML+CSS as much as possible. Moving more of your work into JS
              puts the burden on your team and their tools
            </Quote>
            <Cite>
              <Link
                href="https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4"
                textColor="primary"
              >
                Alex Russell <br />
                (The Cost Of JavaScript In 2018 - Addy Osmani)
              </Link>
            </Cite>
          </BlockQuote>
          <Quote />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize="1.5em" textColor="primary">
              The{' '}
              <S type="bold" style={{ fontWeight: '400' }}>
                transform
              </S>{' '}
              and{' '}
              <S type="bold" style={{ fontWeight: '400' }}>
                opacity
              </S>{' '}
              properties are guaranteed to neither affect nor be affected by the
              normal flow or DOM environment (that is, they won’t cause a reflow
              or repaint, so their animation can be completely offloaded to the
              GPU).
            </Quote>
            <Cite>
              <Link
                href="https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/"
                textColor="primary"
              >
                Sergey Chikuyonok,
                <br />
                CSS GPU Animation: Doing It Right,
                <br />
                Smashing Magazine
              </Link>
            </Cite>
          </BlockQuote>
          <Quote />
        </Slide>
        <Slide notes="How many of you have used CSS Grid?">
          <Heading margin="-2em 0 0 0">CSS Grid</Heading>
          <Appear order={1}>
            <div style={{ width: '500px', margin: '0 auto' }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.chrome}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.firefox}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.safari}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.edge}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.ie}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.opera}
                      />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>57</TableItem>
                    <TableItem>52</TableItem>
                    <TableItem>10.1</TableItem>
                    <TableItem>16</TableItem>
                    <TableItem>
                      11
                      <S type="bold" textColor="tertiary">
                        *
                      </S>
                    </TableItem>
                    <TableItem>44</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Appear>
          <Appear order={2}>
            <div
              style={{
                display: 'inline-block',
                margin: '2em auto 0',
                paddingRight: '.5em'
              }}
            >
              <Text>All mobiles have now support</Text>
            </div>
          </Appear>
          <Appear order={3}>
            <div
              style={{
                display: 'inline-block',
                margin: '2em auto 0',
                paddingRight: '.5em'
              }}
            >
              <Text textSize=".75em" italic>
                (even Samsung Internet)
              </Text>
            </div>
          </Appear>
          <Appear order={4}>
            <div style={{ display: 'inline-block', margin: '2em auto 0' }}>
              <Text textSize=".75em">
                <S type="strikethrough" italic>
                  (Opera Mini)
                </S>
              </Text>
            </div>
          </Appear>
          <Appear order={5}>
            <div style={{ display: 'inline-block', margin: '2em auto 0' }}>
              <Text italic>
                <Link href="https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/">
                  * <S type="bold">grid-template-areas</S> is your new best
                  friend (autoprefixer)
                </Link>
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading margin="-2em 0 0 0">CSS Grid</Heading>
          <List>
            <ListItem>It is responsive</ListItem>
            <ListItem>Use it together with flexbox and other goodies</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          notes="Here's an example"
        >
          <Image
            src={css.images.grid1}
            width="50%"
            margin="-5em auto 2em auto"
          />
          {utils.codeSlide({ css: css.grid1html })}
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          notes="Here's an example"
        >
          <Image
            src={css.images.grid1}
            width="50%"
            margin="-5em auto 2em auto"
          />
          {utils.codeSlide({ css: css.grid1 })}
        </Slide>
        <Slide transition={['spin']} bgColor="tertiary">
          <Heading textColor="primary" fit>
            <Image src={images.boom} />
          </Heading>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          notes="We have a responsive Grid with three lines of CSS"
        >
          <Image
            src={css.images.grid2}
            width="50%"
            margin="-2em auto 2em auto"
          />
          {utils.codeSlide({ css: css.grid1, showTheCode: true })}
          {utils.codeSlide({ css: css.grid1html, showTheCode: true })}
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading fit>CSS custom properties</Heading>
          <Text textAlign="center">Also known as CSS variables</Text>
          <Appear order={1}>
            <div style={{ width: '500px', margin: '0 auto' }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.chrome}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.firefox}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.safari}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.edge}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.ie}
                      />
                    </TableItem>
                    <TableItem>
                      <Image
                        width="64px"
                        display="inline-block"
                        src={images.opera}
                      />
                    </TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>49</TableItem>
                    <TableItem>31</TableItem>
                    <TableItem>9.1</TableItem>
                    <TableItem>16</TableItem>
                    <TableItem>
                      <S type="bold" textColor="tertiary">
                        NO
                      </S>
                    </TableItem>
                    <TableItem>36</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Appear>
        </Slide>
        <Slide notes="You cannot assign variable to itself">
          <Heading fit>CSS custom properties</Heading>
          <List>
            <ListItem>Declarative - no imperative order of operations</ListItem>
            <ListItem>
              Can be redefined with inline styles dynamically
              <br />
              <Text textSize=".75em" italic>
                (For example implement mouse coordinates, scroll position or
                user input with JS)
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          notes="History of custom properties"
        >
          <Layout>
            <div style={{ margin: '-25px 0.5rem 0 0' }}>
              <Image width="440px" src={css.images.customProperties1} />
            </div>
            <Fill>{utils.codeSlide({ css: css.customProperties1 })}</Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" notes="Inheritance">
          <Layout>
            <div style={{ margin: '-25px 0.5rem 0 0' }}>
              <Image
                width="440px"
                src={css.images.customProperties1}
                style={{ opacity: '0.4' }}
              />
              <Image width="440px" src={css.images.customProperties2} />
            </div>
            <Fill>
              {utils.codeSlide({
                css: css.customProperties1,
                showTheCode: true,
                props: { margin: '0 0 1em 0', style: { opacity: '0.4' } }
              })}
              {utils.codeSlide({ css: css.customProperties2 })}
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" notes="Calc()">
          <Layout>
            <div style={{ margin: '-25px 0.5rem 0 0' }}>
              <Image
                width="440px"
                src={css.images.customProperties1}
                style={{ opacity: '0.4' }}
              />
              <Image
                width="440px"
                src={css.images.customProperties2}
                style={{ opacity: '0.4' }}
              />
              <Image width="440px" src={css.images.customProperties3} />
            </div>
            <Fill>
              {utils.codeSlide({
                css: css.customProperties1,
                showTheCode: true,
                props: { margin: '0 0 1em 0', style: { opacity: '0.4' } }
              })}
              {utils.codeSlide({
                css: css.customProperties2,
                showTheCode: true,
                props: { margin: '0 0 1em 0', style: { opacity: '0.4' } }
              })}
              {utils.codeSlide({ css: css.customProperties3 })}
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" notes="Calc()">
          <Layout>
            <div style={{ margin: '-25px 0.5rem 0 0' }}>
              <Image width="440px" src={css.images.customProperties1} />
              <Image width="440px" src={css.images.customProperties2} />
              <Image width="440px" src={css.images.customProperties3} />
            </div>
            <Fill>
              {utils.codeSlide({
                css: css.customProperties1,
                showTheCode: true,
                props: { margin: '0 0 1em 0' }
              })}
              {utils.codeSlide({
                css: css.customProperties2,
                showTheCode: true,
                props: { margin: '0 0 1em 0' }
              })}
              {utils.codeSlide({ css: css.customProperties3 })}
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Layout>
            <div style={{ margin: '-25px 0.5rem 0 0' }}>
              <Image width="440px" src={css.images.customProperties4} />
            </div>
            <Fill>{utils.codeSlide({ css: css.customProperties4 })}</Fill>
          </Layout>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          notes="Degrade gracefully"
        >
          <Layout>
            <div style={{ margin: '0 0.5rem 0 0' }}>
              <Image width="440px" src={css.images.customProperties5} />
            </div>
            <Fill>{utils.codeSlide({ css: css.customProperties5 })}</Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide>
          <Heading />
        </Slide>
        <Slide transition={['fade']}>
          <Heading>Agenda - Day 1</Heading>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem textSize={40} padding="20px" caps>
                  Morning
                </TableHeaderItem>
                <TableHeaderItem textSize={40} padding="20px" caps>
                  Afternoon
                </TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem padding="10px">Introduction to SPAs</TableItem>
                <TableItem padding="10px">
                  Thinking in React: Awesome Todo App!
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem padding="10px">Tooling</TableItem>
                <TableItem padding="10px">
                  React in action: Awesome Todo App!
                </TableItem>
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
        <Slide
          transition={['zoom']}
          bgColor="tertiary"
          notes="kokemukset SPAsta?"
        >
          <Heading lineHeight={1} textColor="primary">
            Introduction
          </Heading>
          <Heading size={4} textColor="primary" fit>
            Single Page Applications
          </Heading>
          <Text textAlign="center">What is a single-page application?</Text>
          <Text textAlign="center">Technical overview</Text>
          <Text textAlign="center">Real-life examples</Text>
        </Slide>
        <Slide>
          <Heading>What is a SPA?</Heading>
          <BlockQuote>
            <Quote textSize="1.5em" textColor="tertiary">
              A single-page application (SPA) is a web application or web site
              that fits on a single web page with the goal of providing a more
              fluid user experience similar to a desktop application.
            </Quote>
            <Cite textColor="secondary">Wikipedia</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading fit>Technical Overview</Heading>
          <Text>Initial page load fetches index HTML and JavaScript</Text>
          <Text>
            JavaScript fetches the actual data via AJAX (Asynchronous JavaScript
            and XML). Data is usually JSON (or XML).
          </Text>
          <Text>
            JavaScript renders the data and binds event handlers for clicks,
            keyboard input etc.
          </Text>
        </Slide>
        <Slide>
          <Image src={images.spaFlow} />
        </Slide>
        <Slide>
          <Heading fit>Real-life Examples</Heading>
          <Text textAlign="center">
            <Link
              textSize={30}
              textColor="secondary"
              href="http://facebook.com"
            >
              Facebook
            </Link>
          </Text>
          <Text textAlign="center">
            <Link textSize={30} textColor="secondary" href="http://twitter.com">
              Twitter
            </Link>
          </Text>
          <Text textAlign="center">
            <Link
              textSize={30}
              textColor="secondary"
              href="http://www.airbnb.fi"
            >
              Airbnb
            </Link>
          </Text>
          <Text textAlign="center">
            <Link
              textSize={30}
              textColor="secondary"
              href="http://www.instagram.com"
            >
              Instagram
            </Link>
          </Text>
          <Text textAlign="center">
            <Link
              textSize={30}
              textColor="secondary"
              href="http://www.google.com"
            >
              Google search
            </Link>
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading textColor="primary">Tooling</Heading>
          <Text textAlign="center">Introduction</Text>
          <Text textAlign="center">Node.js & npm</Text>
          <Text textAlign="center">Yarn</Text>
          <Text textAlign="center">Webpack</Text>
          <Text textAlign="center">Create React App</Text>
        </Slide>
        <Slide>
          <Heading>Introduction</Heading>
          <Text>
            Traditionally web pages have been just static HTML, CSS and maybe
            some simple JS for effects, dropdowns etc.
          </Text>
          <Text>
            Nowadays massive SPAs require something more advanced -> need for
            tooling
          </Text>
          <Text>Some basic use cases for tooling</Text>
          <List>
            <ListItem>
              Compiling ES6/TypeScript -> ES5 and LESS/SASS/PostCSS -> CSS
            </ListItem>
            <ListItem>
              Combining multiple source files into single bundle file for faster
              loading
            </ListItem>
            <ListItem>Running test suites</ListItem>
            <ListItem>
              Optimizations (minification, uglification, tree shaking)
            </ListItem>
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
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading textColor="secondary" lineHeight={2}>
            ES2016+
          </Heading>
          <Image width="15%" margin="40px auto 40px" src={images.jsLogo} />
        </Slide>
        <Slide>
          <Heading fit>
            <Code>let</Code> and <Code>const</Code>{' '}
          </Heading>
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
          <Heading fit>
            Problem: <Code>this</Code> is not lexical
          </Heading>
          HTML
          <CodePane lang="html">{`<button>Do something</button>`}</CodePane>
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
          <Heading>Arrow functions</Heading>
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
          <Text>
            Allows <Code>import</Code> and <Code>export</Code> between files
            (modules)
          </Text>
          <Text>
            <Code>lib.js</Code>
          </Text>
          <CodePane lang="javascript">
            {`export function square(x) {
return x * x;
}
export function squareSum(x, y) {
return Math.sqrt(square(x) + square(y));
}`}
          </CodePane>
          <Text>
            <Code>main.js</Code>
          </Text>
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
            {`const str = 'SO LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG MULTILINE' +
'STRING' +
'!'`}
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
  this.fullName = firstName + ' ' + middleInitial + '. ' + lastName;
}
}

function greeter(person) {
return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

const student = new Student('Jane', 'M', 'User');
greeter(student);`}
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
        <Slide transition={['zoom']} bgColor="tertiary">
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
          <Heading>Virtual DOM</Heading>
          <Image height={'80%'} width={'80%'} src={images.virtualDom} />
        </Slide>
        <Slide>
          <Heading>JSX</Heading>
          <Markdown margin={'0 0 0 250px'}>
            {`
Syntax extension to JavaScript

JSX produces React 'elements'

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
  <h1 className='greeting'>
    Hello, {formatName(user)}!
  </h1>
  );
}
return <h1>Hello, Stranger.</h1>;
}
`}
                    </CodePane>
                  </TableItem>
                  <TableItem>Compiles to</TableItem>
                  <TableItem padding={'0 0 0 2%'}>
                    <CodePane lang="jsx">
                      {`function getGreeting(user) {
if (user) {
return React.createElement(
'h1',
{ className: 'greeting' },
'Hello, ',
formatName(user),
'!'
);
}
return React.createElement(
'h1',
null,
'Hello, Stranger.'
);
}`}
                    </CodePane>
                  </TableItem>
                </TableRow>
              </tbody>
            </Table>
          </Layout>
        </Slide>
        <Slide
          notes={
            <div>
              <Text>import React from 'react'</Text>
              <Text>import ReactDOM from 'react-dom'</Text>
              <Text>import App from './App'</Text>
              <Text>import 'bootstrap/dist/css/bootstrap.css'</Text>
              <Text>import 'font-awesome/css/font-awesome.css'</Text>
              <Text />
              <Text>ReactDOM.render(</Text>
              <Text> App /,</Text>
              <Text> document.getElementById('root')</Text>
              <Text>)</Text>
            </div>
          }
        >
          <Heading fit>
            <Code>Hello World!</Code>
          </Heading>
        </Slide>
        <Slide>
          <Heading fit>React components</Heading>
          <Text>
            Stateless functional components are basically just JavaScript
            functions
          </Text>
          <CodePane lang="jsx">
            {` const App = props => <h1>Hello, {props.name}</h1>; `}
          </CodePane>

          <Text>
            Stateful components can hook into React's lifecycle events and store
            internal state that persists across renders
          </Text>
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
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading textColor="primary">Thinking in React</Heading>
          <Heading lineHeight={2} size={4} textColor="primary">
            Todo App
          </Heading>
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
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading textColor="primary">Redux basics</Heading>
          <Text textAlign="center">Introduction</Text>
          <Text textAlign="center">The concept of immutability</Text>
          <Text textAlign="center">Basic concepts</Text>
          <Image width="15%" margin="40px auto 40px" src={images.reduxLogo} />
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
          <Heading>Immutability</Heading>
          <BlockQuote>
            <Quote textSize="1.5em" textColor="tertiary">
              In object-oriented and functional programming, an immutable object
              (unchangeable object) is an object whose state cannot be modified
              after it is created.
            </Quote>
            <Cite textColor="secondary">Wikipedia</Cite>
          </BlockQuote>
          <CodePane lang="javascript">
            {`
var statement = 'I am immutable';
var other = statement.slice(2, 10);
        `}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Redux</Heading>
          <Image width="90%" height="90%" src={images.redux} />
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading textColor="primary">Redux advanced</Heading>
          <Text textAlign="center">Redux middleware</Text>
          <Text textAlign="center">Async operations in Redux</Text>
          <Text textAlign="center">Async libraries</Text>
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
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading fit textColor="primary">
            Testing React + Redux app
          </Heading>
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
          <Heading>Enzyme</Heading>
          <BlockQuote>
            <Quote textSize="1.5em" textColor="tertiary">
              Enzyme is a JavaScript Testing utility for React that makes it
              easier to assert, manipulate, and traverse your React Components'
              output.
            </Quote>
            <Cite textColor="secondary">https://github.com/airbnb/enzyme)</Cite>
          </BlockQuote>
          <Text>
            Should be compatible with all major test runners and assertion
            libraries
          </Text>
          <Text>
            Wraps packages like React TestUtils and JSDOM to create a simpler
            interface for unit tests
          </Text>
          <Text>
            API: <Code>shallow</Code> <Code>mount</Code> <Code>render</Code>
          </Text>
          <Text>
            <Link
              textSize={20}
              textColor="secondary"
              href="http://airbnb.io/enzyme/docs/api/index.html"
            >
              Enzyme documentation
            </Link>
          </Text>
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
          <Text textAlign="center">
            <Link
              textSize={20}
              textColor="secondary"
              href="http://facebook.github.io/jest/docs/expect.html"
            >
              More Jest matchers can be found in Jest docs
            </Link>
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading fit textColor="primary">
            Bonus Material
          </Heading>
          <Text textAlign="center">Jest snapshot testing</Text>
          <Text textAlign="center">High order components</Text>
          <Text textAlign="center">Redux Form</Text>
          <Text textAlign="center">React Flow typechecking</Text>
          <Text textAlign="center">Styled components</Text>
        </Slide>
        <Slide transition={['zoom']}>
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
- Produces 'Enhanced' components

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
        <Slide transition={['zoom']}>
          <Heading fit>Styled components</Heading>
          <BlockQuote>
            <Quote textSize="1.5em" textColor="tertiary">
              Visual primitives for the component age. Use the best bits of ES6
              and CSS to style your apps without stress
            </Quote>
            <Cite textColor="secondary">
              https://github.com/styled-components/styled-components
            </Cite>
          </BlockQuote>
          <CodePane lang="jsx">
            {`const Button = styled.button'
/* Adapt the colors based on primary prop */
background: ${props => (props.primary ? 'palevioletred' : 'white')};
color: ${props => (props.primary ? 'white' : 'palevioletred')};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
';`}
          </CodePane>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading fit>Styled components</Heading>
          <Text>Overriding component styles</Text>
          <CodePane lang="jsx">
            {`const TomatoButton = styled(Button)'
color: tomato;
border-color: tomato;
';`}
          </CodePane>
        </Slide>
        <Slide transition={['zoom']}>
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
          <Text />
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
