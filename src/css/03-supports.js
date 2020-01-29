export const supports1 = [
  `.grid {
    display: block;
    ...
}`,
  ['Fallback for grid', 'Or fallback with not defining .grid at all!'],
  `@supports (display: grid) {
  .grid {
    display: grid;
    ...
  }
}`,
  ['Feature query (display: grid)']
];

export const supports2 = [
  `.link:hover:before {
  border-left: 8px solid gray;
}`,
  ['Degrade gracefully'],
  `@supports (--css: variables) {`,
  ['Feature query a variable definition'],
  `  .link:hover {
    color: var(--hover-color, #343f68);
  }
  .link:hover:before {
    border-left-color: var(--hover-color, gray);
  }`,
  ['Second argument to var() is the default value'],
  `
  .google {
    --hover-color: #d62d20;
  }
  .yahoo {
    --hover-color: #410093;
  }
}`
];
