const mongoose = require('mongoose');
const config =  require('../config');

const options = {
  useNewUrlParser: true
};

mongoose.connect(config.dev.database.url, options);