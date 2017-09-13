To get up and running, perform the following steps:
1) npm install
2) npm install webpack -g
3) webpack --config "webpack.config.development.js" --progress --colors
4) webpack-dev-server --config "webpack.config.wds.js" --progress --colors --hot --inline


Notes

Quick way to check and update dependency versions:

$ npm install -g npm-check-updates
$ npm-check-updates -u (will automatically update package.json)
$ npm install