// Import React
import React from 'react';
import { css } from 'react-emotion';

// Import Spectacle Core tags
import { Appear, CodePane, ListItem, List } from 'spectacle';

const secondarySlide = {
  transition: ['fade'],
  bgColor: 'tertiary',
  controlColor: 'primary',
  progressColor: 'primary'
};

const boldRed = css`
  font-weight: bold;
  color: red;`;

const skipNext = () => [
  <br key="1" />,
  <br key="2" />,
  <span key="3" className={boldRed}>
    SKIP NEXT IF
  </span>
];

const skipThis = () => [
  <span key="1" className={boldRed}>
    CAN SKIP THIS
  </span>,
  <br key="2" />,
  <br key="3" />
];

const codeSlide = ({ css, showTheCode, props }) => {
  const code = (c, key) => (
    <CodePane lang="css" source={c} key={key} {...props} />
  );
  const fade = (i, children) =>
    i < 1 ? (
      children
    ) : (
        <Appear order={i} key={i}>
          <div>{children}</div>
        </Appear>
      );
  if (!Array.isArray(css)) return code(css);
  if (showTheCode)
    return code(
      css.filter(c => !Array.isArray(c)).join(`
`)
    );
  return css.map((c, i) =>
    fade(
      i,
      Array.isArray(c) ? (
        <List margin=".2em 0 1em 0">
          {c.map((t, ti) => (
            <ListItem textFont="secondary" textColor="primary" key={ti}>
              {t}
            </ListItem>
          ))}
        </List>
      ) : (
          code(c, i)
        )
    )
  );
};

const S400Style = css`
  font-weight: '400'`;

const S400 = ({ children }) => <span className={S400Style}>{children}</span>;

const Div500Style = css`
  width: 500px;
  margin: 0 auto;`;

const inlineText = css`
  display: inline-block;
  margin: 2em auto 0;`;

const inlineTextPadding = css`
  display: inline-block;
  margin: 2em auto 0;
  padding-right: .5em;`;

const margin2505 = css`
  margin: -25px 0.5rem 0 0`;

const opacity04 = css`
  opacity: 0.4;`;

const marginTopNegat2 = css`
  margin-top: -2em`;

const margin2005 = css`
  margin: -20px 0.5rem 0 0`;

const margin1005 = css `
  margin: -10px 0.5rem 0 0`;

const flex = css`
  display: flex,
  flex-direction: row,
  align-items: flex-end`;

const alignSelfCenter = css`
  align-self: center`;

export const utils = {
  secondarySlide,
  skipNext,
  skipThis,
  codeSlide,
  S400,
  Div500Style,
  inlineText,
  inlineTextPadding,
  margin2505,
  opacity04,
  marginTopNegat2,
  margin2005,
  margin1005,
  flex,
  alignSelfCenter
};
