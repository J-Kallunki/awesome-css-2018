import { css } from 'react-emotion';

/*
Name: Duotone Dark
Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)

Spectacle NOTE: This syntax theme was modified to work with react-live and emotion
*/

export default css`
  color: #545454;
  background: white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;

  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;

  & code[class*='language-'],
  & pre[class*='language-'] {
    color: #545454;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  & pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  &:not(pre) > code[class*='language-'],
  & pre[class*='language-'] {
    background: #fefefe;
  }

  /* Inline code */
  &:not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  & .token.comment,
  & .token.prolog,
  & .token.doctype,
  & .token.cdata {
    color: #696969;
  }

  & .token.punctuation {
    color: #545454;
  }

  & .token.property,
  & .token.tag,
  & .token.constant,
  & .token.symbol,
  & .token.deleted {
    color: #007faa;
  }

  & .token.boolean,
  & .token.number {
    color: #008000;
  }

  & .token.selector,
  & .token.attr-name,
  & .token.string,
  & .token.char,
  & .token.builtin,
  & .token.inserted {
    color: #aa5d00;
  }

  & .token.operator,
  & .token.entity,
  & .token.url,
  & .token.string,
  & .token.string,
  & .token.variable {
    color: #008000;
  }

  & .token.atrule,
  & .token.attr-value,
  & .token.function {
    color: #aa5d00;
  }

  & .token.keyword {
    color: #d91e18;
  }

  & .token.regex,
  & .token.important {
    color: #d91e18;
  }

  & .token.important,
  & .token.bold {
    font-weight: bold;
  }
  & .token.italic {
    font-style: italic;
  }

  & .token.entity {
    cursor: help;
  }

  @media screen and (-ms-high-contrast: active) {
    color: windowText;
    background: window;

    & .token.important {
      background: highlight;
      color: window;
      font-weight: normal;
    }

    & .token.atrule,
    & .token.attr-value,
    & .token.function,
    & .token.keyword,
    & .token.operator,
    & .token.selector {
      font-weight: bold;
    }

    & .token.attr-value,
    & .token.comment,
    & .token.doctype,
    & .token.function,
    & .token.keyword,
    & .token.operator,
    & .token.property,
    & .token.string {
      color: highlight;
    }

    & .token.attr-value,
    & .token.url {
      font-weight: normal;
    }
  }
`;
