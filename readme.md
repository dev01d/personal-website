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

# To run tests
yarn test

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
│   │   ├── Gallery.jsx
│   │   ├── Logo.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Social.jsx
│   │   └── res
│   │       ├── gallery.js
│   │       └── lightbox.js
│   ├── index.js
│   ├── router
│   │   └── AppRouter.jsx
│   ├── styles
│   │   ├── App.css
│   │   ├── Sidebar.css
│   │   └── index.css
│   ├── tests
│   │   ├── AboutPage.test.jsx
│   │   ├── GalleryPage.test.jsx
│   │   ├── HomePage.test.jsx
│   │   ├── __snapshots__
│   │   │   ├── AboutPage.test.jsx.snap
│   │   │   ├── GalleryPage.test.jsx.snap
│   │   │   └── HomePage.test.jsx.snap
│   │   └── setupTests.js
│   └── views
│       ├── AboutPage.jsx
│       ├── GalleryPage.jsx
│       └── HomePage.jsx
└── yarn.lock
```
