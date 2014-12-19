var BcryptAuth = require('./BCryptAuth');

/**
 * Create new factory for Auth services
 * @constructor
 */
function AuthFactory() {
}

/**
 * Create auth instance based on type
 * @param {String} type Type of auth service
 * @returns {*}
 */
AuthFactory.prototype.create = function (type) {
    switch (type) {
        case 'bcrypt':
            return this.createBcryptAuth();
        default:
            throw new Error(type + ' is not supported');
            break;
    }
};

/**
 * Create bcrypt instance
 * @returns {BCryptAuth}
 */
AuthFactory.prototype.createBcryptAuth = function () {
    return new BcryptAuth();
};

module.exports = AuthFactory;
