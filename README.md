# Academic Projectpage Template
[![build](https://github.com/denkiwakame/academic-project-template/actions/workflows/build.yaml/badge.svg)](https://github.com/denkiwakame/academic-project-template/actions/workflows/build.yaml) [![build](https://github.com/denkiwakame/academic-project-template/actions/workflows/lint.yaml/badge.svg)](https://github.com/denkiwakame/academic-project-template/actions/workflows/lint.yaml)
- A project page template using [React](https://ja.reactjs.org/) + [UIKit](https://getuikit.com/)
- **Demo**: ⛅[default-theme](https://academic-project-template.github.io/)

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
│   ├── contact.jsx
│   ├── footer.jsx
│   ├── header.jsx
│   ├── method.jsx
│   ├── overview.jsx
│   ├── results.jsx
│   └── video.jsx
├── html
│   └── index.html
├── images               # images to be relocated to assets/ by file-loader
│   ├── method.png
│   ├── result1.png
│   ├── result2.png
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

## Release your project page automatically by GitHub Actions
- **Just in case the token above is unavailable:** generate personal access token by yourself
  - see https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-set-personal-access-token-personal_token
  - register the token as `PERSONAL_TOKEN` at `https://github.com/path/to/your/repo/settings/secrets/actions`

### Release project-page
- `$ git remote add github {your-github-repo-path}`
- `$ git push github {local-project-page-branch}:project-page`
  - GitHub Action atuomatically build HTML on `project-page` branch, and then send it to `gh-pages` branch.
  - All you need to do is to push your project page code to `project-page` branch on your GitHub repo.

### If the project page is not released automatically:
- set `Source` `Branch=gh-pages` `/(root)` at `https://github.com/path/to/your/repo/settings/pages`
