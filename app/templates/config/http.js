/**
 * HTTP Server Settings
 */

module.exports.http = {
    /**
     * Express middleware to use for every Sails request
     */
    middleware: {
        order: [
            'bodyParser',
            'router',
            '404',
            '500'
        ]
    }
};
