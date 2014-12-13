/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.ok(data);
 */

module.exports = function (data) {
    this.res.status(200);
    this.res.jsonx(data);
};
