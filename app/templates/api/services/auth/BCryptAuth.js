var Q = require('q'),
    bcrypt = require('bcrypt'),
    util = require('util'),
    BaseAuth = require('./BaseAuth');

/**
 * Default salt length
 * @type {Number}
 * @private
 */
var DEFAULT_SALT_LENGTH = 10;

util.inherits(BCryptAuth, BaseAuth);

/**
 * Create new bcrypt hasher instance
 * @constructor
 */
function BCryptAuth() {
    BaseAuth.apply(this, arguments);
}

/**
 * Hash password
 * @param {String} password Plain password
 * @param {String|Number} [salt] Generated salt or length of auto generated salt
 * @returns {Promise}
 */
BCryptAuth.prototype.hashPassword = function (password, salt) {
    var defer = Q.defer();

    bcrypt.hash(password, salt || DEFAULT_SALT_LENGTH, function (error, hash) {
        if (error) {
            defer.reject(error);
        } else {
            defer.resolve(hash);
        }
    });

    return defer.promise;
};

/**
 * Hash password in sync mode
 * @param {String} password Plain password
 * @param {String|Number} [salt] Generated salt in string or length of auto generated salt
 * @returns {String} Returns hashed password
 */
BCryptAuth.prototype.hashPasswordSync = function (password, salt) {
    return bcrypt.hashSync(password, salt || DEFAULT_SALT_LENGTH);
};

/**
 * Compare hash password with plain password
 * @param {String} password Plain password
 * @param {String} hash Password's hash
 * @returns {Promise}
 */
BCryptAuth.prototype.comparePassword = function (password, hash) {
    var defer = Q.defer();

    bcrypt.compare(password, hash, function (error, equal) {
        if (error) {
            defer.reject(error);
        } else {
            defer.resolve(equal);
        }
    });

    return defer.promise;
};

/**
 * Compare password with hash in sync mode
 * @param {String} password Plain password
 * @param {String} hash Password's hash
 * @returns {Boolean} Returns true if equal
 */
BCryptAuth.prototype.comparePasswordSync = function (password, hash) {
    return bcrypt.compareSync(password, hash);
};

module.exports = BCryptAuth;
