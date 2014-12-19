var AuthFactory = require('./auth/AuthFactory');

module.exports = new AuthFactory().create('bcrypt');
