// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
//import createTheme from 'spectacle/lib/themes/default';
import createTheme from "./themes/default";

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
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
