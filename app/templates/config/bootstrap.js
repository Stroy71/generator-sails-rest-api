/**
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 * @param cb
 */

module.exports.bootstrap = function (cb) {
    cb();
};
