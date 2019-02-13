# react-structure

This repository contains the minimal app to get started with `redux`, `react`, `hot-reloading`, `async function` and some other great stuffs.

## How to

[yarn](https://github.com/yarnpkg/yarn) 0.18+ must be present on your machine.

### Start

Run webpack-dev-server, get ready to code with hot reloading
```
yarn start
```

## Share

Share your localhost running app to anyone with an internet connection
```
yarn ngrok
```

### Build

Bundle your app. It will create `index.html`, `main.[hash].js`, `vendor.[hash].js` and `manifest.[hash].js`
```
yarn build
```

### Run your build
```
yarn prod
```

### Deploy

#### [Surge.sh](http://surge.sh)
```
surge ./dist -d subdomain.surge.sh
```
