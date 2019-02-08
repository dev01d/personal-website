![Uptime](https://img.shields.io/uptimerobot/ratio/m779994490-c9405c7893773347f4c74fda.svg?style=flat) [![Build](https://img.shields.io/travis/dev01d/personal-website/V2.svg?style=flat)](https://travis-ci.org/dev01d/personal-website)

# per·son·al web·site

### /ˈpərs(ə)n(ə)l/ /ˈwebsīt/

**_noun_**

1. A location connected to the Internet that maintains one or more pages on the World Wide Web belonging to a particular person rather than to anyone else.

   > "Her personal website was a point of pride."

2. Of or concerning one's private life, professional life, relationships, emotions, and/or accomplishments.

   > "This personal website describes his career and gives little information about his personal life"

### Up and running

```bash
# Install all of the things
yarn install

# On the fly compilation
yarn dev

# Test production build with node server
# If process.env.PORT is not specified it defaults to localhost:1234
yarn build:dev

# For production. NODE_ENV auto set to prod
yarn build
```

### Current File structure

```bash
.
├── package.json
├── public
│   ├── assets
│   │   ├── android-chrome-96x96.png
│   │   ├── apple-touch-icon.png
│   │   ├── browserconfig.xml
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── mstile-150x150.png
│   │   ├── safari-pinned-tab.svg
│   │   └── site.webmanifest
│   ├── favicon.ico
│   └── index.html
├── readme.md
├── server
│   ├── readme.md
│   └── server.js
├── src
│   ├── components
│   │   ├── AboutJson.jsx
│   │   ├── LightboxGallery.jsx
│   │   ├── Logo.jsx
│   │   ├── res
│   │   │   ├── gallery.js
│   │   │   └── lightbox.js
│   │   ├── Sidebar.jsx
│   │   └── Social.jsx
│   ├── index.js
│   ├── router
│   │   └── AppRouter.jsx
│   ├── styles
│   │   ├── App.css
│   │   ├── index.css
│   │   └── Sidebar.css
│   └── views
│       ├── AboutPage.jsx
│       ├── App.jsx
│       ├── GalleryPage.jsx
│       └── HomePage.jsx
└── yarn.lock
```
