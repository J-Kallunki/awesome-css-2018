// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Table,
  TableRow,
  TableItem,
  Text,
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
          <Image width="50%" margin="0 auto" src={images.ieGif} />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
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
          <BlockQuote>
            <Quote textSize="1.5em" textColor="primary">
              The{' '}
              <utils.S400>
                transform
              </utils.S400>{' '}
              and{' '}
              <utils.S400>
                opacity
              </utils.S400>{' '}
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
          <Heading margin="-2em 0 0 0">CSS Grid</Heading>
          <Appear order={1}>
          <div className={utils.Div500Style}>
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
                    {/* chrome, firefox, safari, edge, ie, opera */}
                    <TableItem>2017-03</TableItem>
                    <TableItem>2017-03</TableItem>
                    <TableItem>2017-03</TableItem>
                    <TableItem>2017-10</TableItem>
                    <TableItem>
                      11
                      <S type="bold" textColor="tertiary">
                        *
                      </S>
                    </TableItem>
                    <TableItem>2017-03</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
              </div>
          </Appear>
          <Appear order={2}>
            <div className={utils.inlineTextPadding}>
              <Text>All mobiles have now support</Text>
            </div>
          </Appear>
          <Appear order={3}>
            <div className={utils.inlineTextPadding}>
              <Text textSize=".75em" italic>
                (even Samsung Internet)
              </Text>
            </div>
          </Appear>
          <Appear order={4}>
            <div className={utils.inlineTextPadding}>
              <Text textSize=".75em">
                <S type="strikethrough" italic>
                  (Opera Mini)
                </S>
              </Text>
            </div>
          </Appear>
          <Appear order={5}>
            <div className={utils.inlineTextPadding}>
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
          <Image
            src={css.images.grid1}
            width="50%"
            margin="-5em auto 2em auto"
          />
          {utils.codeSlide({ css: css.grid1html })}
        </Slide>
        <Slide {...utils.secondarySlide}>
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
            <div className={utils.Div500Style}>
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
                    {/* chrome, firefox, safari, edge, ie, opera */}
                    <TableItem>2016-03</TableItem>
                    <TableItem>2014-07</TableItem>
                    <TableItem>2016-03</TableItem>
                    <TableItem>2017-10</TableItem>
                    <TableItem>
                      <S type="bold" textColor="tertiary">
                        NO
                      </S>
                    </TableItem>
                    <TableItem>2016-03</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Appear>
        </Slide>
        <Slide>
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
          <Layout>
            <div className={utils.margin2505}>
              <Image width="440px" src={css.images.customProperties1} />
            </div>
            <Fill>{utils.codeSlide({ css: css.customProperties1 })}</Fill>
          </Layout>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Layout>
            <div className={utils.margin2505}>
              <Image
                width="440px"
                src={css.images.customProperties1}
                className={utils.opacity04}
              />
              <Image width="440px" src={css.images.customProperties2} />
            </div>
            <Fill>
              {utils.codeSlide({
                css: css.customProperties1,
                showTheCode: true,
                props: { margin: '0 0 1em 0', className: utils.opacity04 }
              })}
              {utils.codeSlide({ css: css.customProperties2 })}
            </Fill>
          </Layout>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <div className={utils.marginTopNegat2}>
            <Layout margin="-2em 0 0 0">
              <div className={utils.margin2505}>
                <Image width="440px" src={css.images.customProperties4} />
              </div>
              <Fill>{utils.codeSlide({ css: css.customProperties4 })}</Fill>
            </Layout>
          </div>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading fit>@supports</Heading>
          <Appear order={1}>
            <div className={utils.Div500Style}>
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
                    {/* chrome, firefox, safari, edge, ie, opera */}
                    <TableItem>2013-05</TableItem>
                    <TableItem>2013-05</TableItem>
                    <TableItem>2015-10</TableItem>
                    <TableItem>2015-07</TableItem>
                    <TableItem>
                      <S type="bold" textColor="tertiary">
                        ;)
                      </S>
                    </TableItem>
                    <TableItem>2012-11</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Appear>
          <Appear order={2}>
            <div className={utils.inlineTextPadding}>
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
          {utils.codeSlide({ css: css.supports1 })}
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Layout>
            <div className={utils.margin2005}>
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
            <div className={utils.Div500Style}>
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
                    {/* chrome, firefox, safari, edge, ie, opera */}
                    <TableItem>2012-02</TableItem>
                    <TableItem>2015-01</TableItem>
                    <TableItem>2012-07</TableItem>
                    <TableItem>tbd</TableItem>
                    <TableItem>
                      <S type="bold" textColor="tertiary">
                        No
                      </S>
                    </TableItem>
                    <TableItem>2013-07</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Appear>
          <Appear order={2}>
            <div className={utils.inlineTextPadding}>
              <Text>Browser support may differ on different filters!</Text>
              <Text>Similar alternative worth checking out is SVG filters</Text>
            </div>
          </Appear>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Layout>
            <div className={utils.margin1005}>
              <Image width="440px" src={css.images.filters1} />
            </div>
            <Fill>{utils.codeSlide({ css: css.filters1 })}</Fill>
          </Layout>
        </Slide>
        <Slide {...utils.secondarySlide}>
          <Layout>
            <div className={utils.margin1005}>
              <Image width="440px" src={css.images.filters1} />
            </div>
            <Fill>{utils.codeSlide({ css: css.filters2 })}</Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading fit>And to the Future...</Heading>
          <Text textAlign="center" textSize="2em" bold>
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
            <ListItem>
              <Link href="https://css-houdini.rocks/">css-houdini.rocks</Link>{' '}
              by Vincent De Oliveira
            </ListItem>
          </List>
        </Slide>

        <Slide {...utils.secondarySlide}>
          <Heading textColor="secondary" margin="-1em auto 1em">
            Thank you.
          </Heading>
          <Text textAlign="center" margin="0 0 2em 0">
            <Link
              href="http://bit.ly/awesome-css-links"
              textColor="primary"
              textSize="1.5em"
            >
              bit.ly/awesome-css-links
            </Link>
          </Text>
          <div
            className={utils.flex}
          >
            <Image
              width="25%"
              src={images.cssisawesome}
              className={utils.alignSelfCenter}
              margin="0 auto 0 0"
            />
            <div>
              <Text textAlign="right" margin="0">
                <Link
                  href="https://twitter.com/JKallunki"
                  textColor="secondary"
                >
                  @JKallunki
                </Link>
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
