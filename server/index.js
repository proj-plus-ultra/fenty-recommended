const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/fenty', router);

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));