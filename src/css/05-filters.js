export const filters1 = [
  `<ul class="dots">
  <li class="mover" />
  <li class="dot" />
  <li class="dot" />
  <li class="dot" />
  <li class="dot" />
  <li class="dot" />
</ul>`
];

export const filters2 = [
  `:root {
  --color: black;
  --color-bgr: white;
}

.dots {
  background: var(--color-bgr);
  filter: blur(5px) contrast(10);
  /*etc...*/
}
.dot {
  background: var(--color);
  /*etc...*/
}
.mover {
  background: var(--color);
  opacity: 0.6;
  animation: move 10s linear infinite;
  /*etc...*/
}
@keyframes move {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(155px);
  }
}`,
  ['filter: blur(5px) contrast(10);']
];
