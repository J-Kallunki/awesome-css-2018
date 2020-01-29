export const customProperties1 = [
  `.block-1 {
  border-color: currentColor;
  color: #343f68;
}`,
  ['Supported starting from IE9']
];

export const customProperties2 = [
  `.block-2,
.element {
  border: var(--border);
  --border: initial;`,
  ['Set to inital instead of the default inherit'],
  `}
.block-2 {
  --border: 4px solid #fff;
}`,
  `.inherit-border {
  --border: inherit;
}`,
  ['Inherit if needed']
];

/*
export const customProperties3 = [
  `:root {
  --block-size: 8;
}
.block-3 {
  width: calc(var(--block-size) * 4vw);
  height: calc(var(--block-size) * 2vh);
}`,
  [
    'Use Calc()-function for calculations',
    'In HTML, :root represents the <html> element, except that its specificity is higher.'
  ]
];
*/

export const customProperties3b = [
  `.block,
.element {
  --color-default: var(--color, #343f68);
  border-color: var(--color-default);
  background-color: var(--bg-color);
  color: var(--color-default);
}
.block-2,
.block-3 {
  --bg-color: #343f68;
}
.block-2,
.element {
  --color: white;
}
.block-3 {
  --color: #ff8551;
}`,
  `body {
  counter-reset: a;
}
* {
  --write-me: initial;
}
:before {
  content: var(--write-me);
}
.block {
  --write-me: ".block-" counters(a, "");
  counter-increment: a;
}
.element {
  --write-me: ".element";
}`,
  `:root {
  --margin-b: 18px;
}
* {
  --set-me-only-margin-b: inital;
  margin: 0 0 var(--set-me-only-margin-b, 0) 0;
}
.block {
  --set-me-only-margin-b: var(--margin-b);
}
@media (min-width: 1000px) {
  :root {
    --margin-b: 24px;
  }
}`
];

export const customProperties4 = [
  `<div class="block">
  <p>Rainy days in a year:</p>
  <div class="element" style="--rain: 112">
    Tampere
  </div>
  <div class="element" style="--rain: 111">
    Helsinki
  </div>
  <div class="element" style="--rain: 145">
    London
  </div>
</div>`,
  `:root {
  --color-1: #ff8551;
  --color-2: #343f68;
}
.element {
  --percent: calc(1% * var(--rain));
  background-image: linear-gradient(
    to right,
    var(--color-1) 0%,
    var(--color-2) var(--percent),
    transparent var(--percent),
    transparent 100%
  );
}`,
  [
    'In HTML, :root represents the <html> element, except that its specificity is higher.'
  ],
  ['Use Calc()-function for calculations'],
  ["style.setProperty('--var', value)"]
];
