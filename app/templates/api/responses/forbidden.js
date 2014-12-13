/**
 * 403 (Forbidden) Handler
 *
 * Usage:
 * res.forbidden(err);
 */

module.exports = function (data) {
    this.res.status(403);
    this.res.jsonx(data);
};
