const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.dev');
const config = require('./config');

const compiler = webpack(webpackConfig);
const serverConfig = config.getConfigByEnv();
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.set('x-powered-by', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static(path.join(__dirname, '../../client/dist'), {
  maxAge: serverConfig.cacheTime,
}));

app.use((req, res) => {
  res.status(200).render('index');
});

app.listen(serverConfig.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at http://localhost:${serverConfig.port}`);
});
