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
  Notes,
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
        <Slide transition={['slide']} bgColor="black">
          <Notes>
            <p>Remember when the CSS was awesome but the browsers weren't?</p>
            <p>
              Still today one of every twentyseventh user in Finland is using
              Internet Explorer Eleven
            </p>
            <br />
            <br />
            <br />
            <p>How many of you wan't to use CSS?</p>
          </Notes>
          <Image width="50%" margin="0 auto" src={images.ieGif} />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Notes>
            So my name is Joonas Kallunki
            <br />
            I'm frontend developer at Gofore
          </Notes>
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
              <Text textAlign="right" margin="2em 0 0 0">
                <Link href="https://twitter.com/JKallunki">@JKallunki</Link>
                <br />
                Joonas Kallunki
                <br />
                Visuel Developer, Frontend Stapler
              </Text>

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
          <Notes>Why do I need CSS?</Notes>
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
        <Slide {...utils.secondarySlide}>
          <Notes>
            Browser won't render any processed content until the CSSOM is
            constructed
          </Notes>
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
        <Slide {...utils.secondarySlide}>
          <Notes>Browsers optimize HTML and CSS as much as possible.</Notes>
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
        <Slide {...utils.secondarySlide}>
          <Notes>
            Transform and Opacity animations can be completely offloaded to the
            GPU
          </Notes>
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

        <Slide>
          <Notes>
            How many of you have used CSS Grid?
            <ul>
              <li>
                And for the internet explorer there's good article how to make
                it happen
              </li>
            </ul>
          </Notes>
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
        <Slide {...utils.secondarySlide}>
          <Notes>
            Here's an example <br />
            basic HTML
          </Notes>
          <Image
            src={css.images.grid1}
            width="50%"
            margin="-5em auto 2em auto"
          />
          {utils.codeSlide({ css: css.grid1html })}
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Notes>
            And defining the Grid <br /> <br />
            template columns has..
          </Notes>
          <Image
            src={css.images.grid1}
            width="50%"
            margin="-5em auto 2em auto"
          />
          {utils.codeSlide({ css: css.grid1 })}
        </Slide>
        <Slide {...utils.secondarySlide} transition={['spin']}>
          <Heading textColor="primary" fit>
            <Image src={images.boom} />
          </Heading>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Notes>
            We have a responsive Grid with three lines of CSS
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ul>
              <li>Repeat unspecified number of columns</li>
              <li>Fit the currently available columns into the space</li>
              <li>
                Minimum of 60 pixels and a maximum of 1 fraction unit of the
                available space
              </li>
            </ul>
          </Notes>
          <Image
            src={css.images.grid2}
            width="50%"
            margin="-2em auto 2em auto"
          />
          {utils.codeSlide({ css: css.grid1, showTheCode: true })}
          {utils.codeSlide({ css: css.grid1html, showTheCode: true })}
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Notes>So then our next topic is</Notes>
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
        <Slide>
          <Notes>
            <p>And the syntax is</p>
            <ul>
              <li>You cannot assign CSS-variable to itself</li>
              <li style={{ marginTop: '1em' }}>
                And environment variable landed to Safari <br />
                (usable for iOS safe-area)
              </li>
            </ul>
          </Notes>
          <Heading fit margin="-1em 0 0 0">
            CSS custom properties
          </Heading>
          <Text textAlign="center">
            <S type="bold">
              --what-we-want: sausage;
              <br />
              what-we-get: var(--what-we-want);
            </S>
          </Text>
          <List margin="2em 0 0 0">
            <ListItem>Declarative - no imperative order of operations</ListItem>
            <ListItem>
              Can be redefined with inline styles dynamically
              <br />
              <Text textSize=".75em" italic>
                (For example implement mouse coordinates, scroll position or
                user input with JS)
              </Text>
            </ListItem>
            <ListItem margin="1em 0 0 0">
              env() landed to Safari 11.1
              <br />
              <Text textSize=".75em" italic>
                (padding-top: env(safe-area-inset-top);)
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Notes>Here's the history of custom properties</Notes>
          <Layout>
            <div style={{ margin: '-25px 0.5rem 0 0' }}>
              <Image width="440px" src={css.images.customProperties1} />
            </div>
            <Fill>{utils.codeSlide({ css: css.customProperties1 })}</Fill>
          </Layout>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Notes>
            Inheritance
            <ul>
              <li>
                Setting the default for the border-variable to initial insted of
                inherit
              </li>
            </ul>
          </Notes>
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
        <Slide {...utils.secondarySlide}>
          <Notes>
            Here's another example <br />
            simple HTML
          </Notes>
          <div style={{ marginTop: '-2em' }}>
            <Layout margin="-2em 0 0 0">
              <div style={{ margin: '-25px 0.5rem 0 0' }}>
                <Image width="440px" src={css.images.customProperties4} />
              </div>
              <Fill>{utils.codeSlide({ css: css.customProperties4 })}</Fill>
            </Layout>
          </div>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading fit>@supports</Heading>
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
                    <TableItem>28</TableItem>
                    <TableItem>22</TableItem>
                    <TableItem>9</TableItem>
                    <TableItem>12</TableItem>
                    <TableItem>
                      <S type="bold" textColor="tertiary">
                        ;)
                      </S>
                    </TableItem>
                    <TableItem>12.1</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Appear>
          <Appear order={2}>
            <div style={{ display: 'inline-block', margin: '2em auto 0' }}>
              <Text>
                <S type="bold" textColor="tertiary">
                  ;)
                </S>{' '}
                <S type="italic">Degrade gracefully</S>
              </Text>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Notes>
            Called a feature query <br />
            And the syntax is
            {utils.skipNext()}
          </Notes>
          <Heading fit margin="-1em 0 0 0">
            @supports
          </Heading>
          <Text textAlign="center" bold>
            @supports (feature: condition)
            {' {styles...}'}
          </Text>
          <List>
            <ListItem>A feature query</ListItem>
            <ListItem>AND, OR, NOT operators</ListItem>
            <ListItem>
              All browsers that support CSS grid, support @supports{' '}
              <S type="italic" textColor="tertiary" margin="0 0 0 2em">
                ...Rididi ding ding doo!
              </S>
            </ListItem>
          </List>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Notes>
            {utils.skipThis()}
            So CSS Grid with supports
          </Notes>
          {utils.codeSlide({ css: css.supports1 })}
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Notes>
            {utils.skipThis()}
            Degrade CSS-variables gracefully <br />
            default default = transparent
          </Notes>
          <Layout>
            <div style={{ margin: '-20px 0.5rem 0 0' }}>
              <Image width="440px" src={css.images.supports2} />
            </div>
            <Fill>{utils.codeSlide({ css: css.supports2 })}</Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading fit margin="-1em 0 0 0">
            How do I get smooth
          </Heading>
          <Heading fit>animation from the GPU?</Heading>
          <Appear order={2}>
            <Text textAlign="center">(Simplified version)</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit margin="-1em 0 0 0">
            How do I get smooth animation from the GPU?
          </Heading>
          <Text textAlign="center" bold>
            Composing the images of cached elements
          </Text>
          <Appear order={1}>
            <List>
              <ListItem>Each browser vendor implements in its own way</ListItem>
              <ListItem>Repainting is very performance-costly</ListItem>
              <ListItem>
                The size of compositing layers is likely be more important than
                the number of layers (memory CPU -> GPU)
              </ListItem>
            </List>
          </Appear>
          <Appear order={2}>
            <List margin="2.5em 0 0 0">
              <ListItem>
                Make sure animation does not
                <List>
                  <ListItem>affect the document’s flow</ListItem>
                  <ListItem>depend on the document’s flow</ListItem>
                  <ListItem>cause a repaint.</ListItem>
                </List>
              </ListItem>
            </List>
          </Appear>
          <Appear order={3}>
            <div>
              <Heading size={4} fit margin="-.1em 0 0 0">
                <S type="bold">Transform</S> and <S type="bold">opacity</S>
              </Heading>
              <Heading size={4} fit margin="-.4em 0 0 0">
                are the only CSS properties that meet the conditions above
              </Heading>
              <Text textAlign="center" textSize=".75em" italic>
                (With JS first add to CSS will-change: transform; then use
                element.style)
              </Text>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit>CSS filters</Heading>
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
                    <TableItem>18</TableItem>
                    <TableItem>35</TableItem>
                    <TableItem>6</TableItem>
                    <TableItem>18</TableItem>
                    <TableItem>
                      <S type="bold" textColor="tertiary">
                        No
                      </S>
                    </TableItem>
                    <TableItem>15</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Appear>
          <Appear order={2}>
            <div style={{ display: 'inline-block', margin: '2em auto 0' }}>
              <Text>Browser support may differ on different filters!</Text>
            </div>
          </Appear>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Notes>
            Here's my simple Goooey example. <br />
            First the HTML then the CSS.
          </Notes>
          <Layout>
            <div style={{ margin: '-10px 0.5rem 0 0' }}>
              <Image width="440px" src={css.images.filters1} />
            </div>
            <Fill>{utils.codeSlide({ css: css.filters1 })}</Fill>
          </Layout>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Notes>Just look here for the main part of the implementation</Notes>
          <Layout>
            <div style={{ margin: '-10px 0.5rem 0 0' }}>
              <Image width="440px" src={css.images.filters1} />
            </div>
            <Fill>{utils.codeSlide({ css: css.filters2 })}</Fill>
          </Layout>
        </Slide>

        <Slide>
          <Notes>
            Upcoming thing
            <br />
            <br />
            There are APIs to browser’s CSS engine coming
          </Notes>
          <Heading fit>To the Future..?</Heading>
          <Text textAlign="center" bold>
            CSS Houdini
          </Text>
          <List>
            <ListItem>
              Engineers from Mozilla, Apple, Opera, Microsoft, HP, Intel and
              Google
            </ListItem>
            <ListItem>Public since Jan 2015</ListItem>
            <ListItem>
              JavaScript accessible{' '}
              <S type="bold">APIs to browser’s CSS engine</S>
            </ListItem>
            <ListItem>Make browser support issues a thing of the past</ListItem>
          </List>
        </Slide>

        <Slide {...utils.secondarySlide}>
          <Notes>
            So how many of you would like to try out these features?
          </Notes>
          <Heading textColor="secondary" margin="-1em auto 1.4em">
            Thank you.
          </Heading>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end'
            }}
          >
            <Image
              width="25%"
              src={images.cssisawesome}
              style={{ alignSelf: 'center' }}
              margin="0 auto 0 0"
            />
            <div>
              <Text textAlign="right" margin="0">
                <Link href="https://twitter.com/JKallunki">@JKallunki</Link>
                <br />
                Joonas Kallunki
                <br />
                Visuel Developer, Frontend Stapler
              </Text>
              <Link href="https://gofore.com/">
                <Image width="40%" margin="0 -2px 0 auto" src={images.gofore} />
              </Link>
            </div>
          </div>
        </Slide>
      </Deck>
    );
  }
}
