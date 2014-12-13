/**
 * 400 (Bad Request) Handler
 *
 * Usage:
 * res.badRequest(data);
 */

module.exports = function (data) {
    this.res.status(400);
    this.res.jsonx(data);
};
