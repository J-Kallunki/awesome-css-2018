export const grid1 = [
  `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));`,
  [
    'Repeat unspecified number of columns',
    'Fit the currently available columns into the space',
    'Minimum of 60 pixels and a maximum of 1 fraction unit of the available space'
  ],
  `  grid-auto-rows: 100px;
}`,
  ['Set implicitly created rows height to 100 pixels']
];

export const grid1html = `<div class="grid">
  <div class="item"><img src="CSS3_logo_and_wordmark.svg" /></div>
  <div class="item"><img src="HTML5_logo_and_wordmark.svg" /></div>
  <div class="item"><img src="Google_Chrome_icon_%28September_2014%29.svg" /></div>
  <div class="item"><img src="Firefox_Logo%2C_2017.svg" /></div>
  <div class="item"><img src="Internet_Explorer_10%2B11_logo.svg" /></div>
  ...
</div>
`;

export const grid2 = `.item {
  display: flex;
  justify-content: center;
  align-items: center;
}`;

export const grid3 = `img {
  max-width: 100%;
}`;
