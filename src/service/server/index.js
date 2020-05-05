require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { join } = require('path');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(morgan('combined'));

app.use(express.static(join(__dirname, '../../..', 'public/')));

// app.use("/api", require("./api"));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../../..', 'public', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Application listening on port ${port}`));
