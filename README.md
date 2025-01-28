# 🎨 Academic Project Page Template

[![build](https://github.com/denkiwakame/academic-project-template/actions/workflows/build.yaml/badge.svg)](https://github.com/denkiwakame/academic-project-template/actions/workflows/build.yaml) [![lint](https://github.com/denkiwakame/academic-project-template/actions/workflows/lint.yaml/badge.svg)](https://github.com/denkiwakame/academic-project-template/actions/workflows/lint.yaml)
[![license](https://img.shields.io/badge/LICENSE-CC--BY--SA4.0-important.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

## ✨ Features

- 🚀 Built with [React](https://react.dev/) + [UIKit](https://getuikit.com/)
- 📝 Markdown support with full styling capabilities
- ➗ Mathematical equations with KaTeX
- 🎨 Customizable themes
- 🔄 Auto-deployment with GitHub Actions
- 📱 Fully responsive design

🌐 **Demo**: [default-theme](https://denkiwakame.github.io/academic-project-template)

## 🚦 Prerequisites

### System Requirements

Supported platforms:

- 🪟 Windows (WSL)
- 🐧 Linux
- 🍎 macOS

### 📦 Node.js Setup

Recommended: Install Node.js using [Volta](https://volta.sh/)

```bash
# Install Volta
curl https://get.volta.sh/ | bash

# After restarting your shell...
volta install node@22.13.1
volta pin node@22.13.1

# Verify installation
node --version  # v22.13.1
npm --version   # 10.9.2
```

## 🛠️ Development Guide

### 📥 Installation

```sh
npm install
```

### 💻 Development Server

```sh
npm run serve
```

### 🏗️ Build

```sh
npm run clean
npm run build
npm run preview
```

#### 🤖 Puppeteer Dependencies (for react-snap pre-rendering)

Required packages for Headless Chrome (pre-rendering):

```bash
sudo apt install -y libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb libgbm-dev fonts-ipafont
```

## 🎨 Customization

- 💅 Customize styles without writing CSS: modify [UIKit variables](https://github.com/uikit/uikit/blob/develop/src/scss/variables.scss) in `src/scss/theme.scss`
- 🧩 Extend components with:
  - [UIKit Components](https://getuikit.com/docs/introduction)
  - [React Icons](https://react-icons.github.io/react-icons/)

## 📁 Project Structure

```
template.yaml         # Configuration file
index.html            # Root HTML
src/
├── components/       # React components
├── js/
│   └── styles.js     # Style settings
├── pages/
│   └── index.jsx     # Main template
└── scss/             # Theme settings
    └── theme.scss
public/
└── media/            # Media files
```

## ⚙️ Configuration

Configure your project in `template.yaml`, leaving the N/A fields as "null".

```yaml
theme: default # default || dark
organization: 'Your Lab'
title: 'Project Title'
resources:
  paper: https://example.com/paper
  code: https://github.com/your/repo
# ... other configurations
```

## 🚀 Release Your Project Page

### Automatic Deployment with GitHub Actions

1. Go to your repository's Settings > Pages
2. Under Build and Deployment > Source, select `GitHub Actions`
3. Configure your remote repository:

```bash
git remote add origin your-repo-url
git push origin main
```

The included GitHub Actions workflow will automatically:

- Build your project
- Deploy to GitHub Pages
- Update on every push to main branch

### Custom Domain (Optional)

1. Add your domain in repository Settings > Pages > Custom domain
2. Create a CNAME record pointing to `your-username.github.io`
3. Add a `CNAME` file in the `public` directory with your domain

📚 For more details: [GitHub Pages Documentation](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 📄 License

[CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
