/**
 * Cross-Origin Resource Sharing (CORS) Settings
 */

module.exports.cors = {
    /**
     * Allow CORS on all routes by default?
     */
    allRoutes: false,

    /**
     * Which domains which are allowed CORS access?
     */
    origin: '*',

    /**
     * Allow cookies to be shared for CORS requests?
     */
    credentials: true,

    /**
     * Which methods should be allowed for CORS requests?
     */
    methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',

    /**
     * Which headers should be allowed for CORS requests?
     */
    headers: 'content-type'
};
