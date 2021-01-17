const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 4344;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
// const appRouter = require('./router');
const config = require('../webpack.config.js');
const compiler = webpack(config);

app.set('port', PORT);
app.use(bodyParser.json());

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	})
);
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname + './../public/')));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '../../public/'));
});

// app.use('/api/v1', appRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));