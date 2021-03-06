const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');

const movRouter = require('./controllers/movements');

logger.info('connecting to port', process.env.PORT);

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());
app.use('/api/movements', movRouter);
app.use(express.static('build'));

module.exports = app;
