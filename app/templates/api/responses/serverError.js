/**
 * 500 (Server Error) Response
 *
 * Usage:
 * res.serverError(err);
 */

module.exports = function (data) {
    this.res.status(500);
    this.res.jsonx(data);
};
