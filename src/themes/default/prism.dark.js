import { css } from 'react-emotion';

/*
Name: Duotone Dark
Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)

Spectacle NOTE: This syntax theme was modified to work with react-live and emotion
*/

export default css`
  background: #fefefe;
  color: #007faa;
  text-align: left;
  padding: 0.5em;

  & .token.comment,
  & .token.prolog,
  & .token.doctype,
  & .token.cdata {
    color: #6c6783;
  }

  & .token.punctuation {
    color: #6c6783;
  }

  & .token.namespace {
    opacity: 0.7;
  }

  & .token.tag,
  & .token.operator,
  & .token.number {
    color: #aa5d00;
  }

  & .token.property {
    color: #007faa;
  }

  & .token.function {
    color: #545454;
  }

  & .token.tag-id,
  & .token.selector,
  & .token.atrule-id {
    color: #aa5d00;
  }

  & .token.attr-name {
    color: #545454;
  }

  & .token.boolean,
  & .token.string,
  & .token.entity,
  & .token.url,
  & .language-css .token.string,
  & .language-scss .token.string,
  & .style .token.string,
  & .token.attr-value,
  & .token.keyword,
  & .token.control,
  & .token.directive,
  & .token.unit,
  & .token.statement,
  & .token.regex,
  & .token.atrule {
    color: #aa5d00;
  }

  & .token.placeholder,
  & .token.variable {
    color: #aa5d00;
  }

  & .token.deleted {
    text-decoration: line-through;
  }

  & .token.inserted {
    border-bottom: 1px dotted #aa5d00;
    text-decoration: none;
  }

  & .token.italic {
    font-style: italic;
  }

  & .token.important,
  & .token.bold {
    font-weight: bold;
  }

  & .token.important {
    color: #545454;
  }

  & .token.entity {
    cursor: help;
  }
`;
