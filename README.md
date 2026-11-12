# Animated Blossoming Flowers — HTML & CSS

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/animated-blossoming-flowers/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 6.2-second screen recording.

## What the video shows

The tutorial is titled **Animated Blossoming Flowers Using HTML & CSS**. A dark botanical scene plays inside a preview window: slender stems grow upward, green leaves unfold, and pale blue flowers bloom at the tips. The screen also shows an HTML code panel and a creator footer.

## Visible HTML fragment reconstructed from the code panel

```html
<div class="flower">
  <div class="flower__leafs">
    <div class="flower__leaf flower__leaf--1"></div>
    <div class="flower__leaf flower__leaf--2"></div>
    <div class="flower__leaf flower__leaf--3"></div>
    <div class="flower__leaf flower__leaf--4"></div>
    <div class="flower__white-circle"></div>
  </div>
  <div class="flower__line"></div>
</div>
```

The recording's code is small and not every character is legible. This project recreates the visual effect using inline SVG shapes and CSS keyframe animations rather than claiming a verbatim copy of the full source.

## Implemented

- Multiple stems grow from the ground.
- Leaves unfold at staggered intervals.
- Four blue-white flowers bloom one after another.
- Petals gently sway after blooming.
- Dark night-sky style garden background with subtle stars.
- Responsive tutorial layout and code preview.
- Like, Save and Share demo actions.
- Reduced-motion accessibility support.
- No external images, fonts, libraries or build tools.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
animated-blossoming-flowers/
├── index.html
├── style.css
├── script.js
└── README.md
```
