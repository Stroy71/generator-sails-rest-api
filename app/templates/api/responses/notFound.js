/**
 * 404 (Not Found) Handler
 *
 * Usage:
 * res.notFound(err);
 */

module.exports = function (data) {
    this.res.status(404);
    this.res.jsonx(data);
};
