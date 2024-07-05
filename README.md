# Academic Projectpage Template
[![build](https://github.com/denkiwakame/academic-project-template/actions/workflows/build.yaml/badge.svg)](https://github.com/denkiwakame/academic-project-template/actions/workflows/build.yaml) [![build](https://github.com/denkiwakame/academic-project-template/actions/workflows/lint.yaml/badge.svg)](https://github.com/denkiwakame/academic-project-template/actions/workflows/lint.yaml)
[![license](https://img.shields.io/badge/LICENSE-CC--BY--SA4.0-important.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
- An academic project page template powered by [React](https://ja.reactjs.org/) + [UIKit](https://getuikit.com/), w/ markdown and KaTeX support !
- **Demo**: ⛅[default-theme](https://denkiwakame.github.io/academic-project-template)

## Prerequisites
- Before you begin, ensure you have met the following requirements:
### 🪟WSL 🐧Linux 🍎MacOS
#### Install nodejs>=20 using [node version manager](https://volta.sh/)
```bash
$ curl https://get.volta.sh/ | bash
# restart your shell...
$ volta install node@20.11.0
$ volta pin node@20.11.0

$ node --version
v20.11.0
$ npm --version
10.2.4
```
#### Install puppeteer dependencies
- react-snap uses Headless Chromium through puppeteer to [pre-render React apps](https://blog.logrocket.com/pre-rendering-react-app-react-snap/).

```bash
sudo apt install -y libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb libgbm-dev fonts-ipafont
```

## Usage
### Installation
- Clone this repository

```sh
$ npm install
```
### Build
```sh
$ npm run clean
$ npm run build
$ npm run serve
```

### Develop
```sh
$ npm run serve
```

### Customize
- You can change styles without writing css. Modify [UIKit variables](https://github.com/uikit/uikit/blob/bc6dd1851652e5b77387a1efefc16cea6e3d165b/src/scss/variables.scss) at `src/scss/theme.scss`
- You can extend `*.jsx` files using these assets or custom React Components.
  - UIKit Components https://getuikit.com/docs/introduction
  - React-Icons https://react-icons.github.io/react-icons/

### Structure
```
template.yaml    # template arguments
src/
├── components          # React components loaded in index.jsx
│   ├── authors.jsx
│   ├── citation.jsx
│   ├── footer.jsx
│   ├── header.jsx
│   ├── method.jsx
│   ├── abstract.jsx
│   ├── body.jsx
│   └── video.jsx
├── html
│   └── index.html
├── media                # media files to be relocated to assets/ by file-loader
│   ├── placeholder.png
│   ├── demo.mp4
│   └── teaser.png
├── js
│   └── styles.js        # embed styles to js
├── pages
│   └── index.jsx        # template root
└── scss                 # color theme zoo
    └── theme.scss
```

### Template
- fillin values at `template.yaml`
- fillin `null` for N/A contents (e.g. `method: null`)

```yaml
theme: default # default || dark
organization: Pixel Genius Labs
twitter: '@denkivvakame'
title: 'Academic Project Page Template: Do Whatever the Hack You Want with This Template'
resources:
  paper: https://openreview.net/
  arxiv: https://arxiv.org
  code: https://github.com/denkiwakame/academic-project-template
  video: https://www.youtube.com/embed/onbnb_D1wC8?si=xJczUv716Lt5aO4l&amp;start=1150
  huggingface: https://huggingface.co/
description: academic projectpage template that supports markdown and KaTeX
image: https://denkiwakame.github.io/academic-project-template/assets/teaser.png
url: https://denkiwakame.github.io/academic-project-template
speakerdeck: # speakerdeck slide ID
authors:
  - name: Wakame Denki*
    affiliation: [1, 2]
    url: http://denkiwakame.github.io/
    position: intern
  - name: Jane Doe
    affiliation: [1]
    position: Researcher
    url: https://thispersondoesnotexist.com/
  - name: John Smith
    affiliation: [1]
    position: Researcher
    url: https://thispersondoesnotexist.com/
affiliations:
  - Pixel Genius Labs
  - NeuroNauts Academy
meta:
  - '*work done while she was interning at Pixel Genius Lab.'
bibtex: >
  @article{doe2024superai,
    author    = {Jane Doe and John Smith},
    title     = {Unleashing the Power of Super AI: Transforming the Future of Technology},
    journal   = {Journal of Superintelligent Systems},
    year      = {2024},
    volume    = {99},
    number    = {1},
    pages     = {1-42},
    month     = {January},
    keywords  = {Super AI, Machine Learning, Artificial Intelligence, Technological Innovation},
    doi       = {10.9999/jsis.2024.001},
    url       = {https://www.example.com/superai-article},
    note      = {This paper sets the benchmark for future AI research and applications.}
  }

teaser: teaser.png
abstract: |
  This is a versatile template designed to satisfy your research project page needs, all while harnessing the power of **UIKit** and **React**. Built on the foundations of simplicity and flexibility, this template allows you to focus on expressing your ideas without the hassle of directly handling CSS—thanks to customizable SASS variables.
  With markdown as your canvas and $\KaTeX$ for precise equations, crafting clear and engaging project page becomes effortless. Whether you're unraveling complex theories or presenting your findings, this template aims to support your scholarly endeavors with grace and ease.
  *Need to edit HTML directly?* Fear not! In addition to markdown, you can also directly write HTML with ease. Feel empowered to craft your content exactly as you envision it, whether through markdown's simplicity or the precision of HTML.

body:
 ...
```

### Release your project page automatically bt GitHub Actions
- Navigate to `https://github.com/{your-github-repo-path}/settings/pages`
- Select `GitHub Actions` at **Build and Deployment > Source**
- `$ git remote add origin {your-github-repo-path}`
- `$ git push origin main`
- See also: [GitHub Documentation](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [actions/deploy-pages](https://github.com/actions/deploy-pages)
