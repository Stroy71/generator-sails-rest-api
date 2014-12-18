/**
 * HTTP Server Settings
 */

module.exports.http = {
    /**
     * Express middleware to use for every Sails request
     */
    middleware: {
        order: [
            'startRequestTimer',
            'cookieParser',
            'session',
            'bodyParser',
            'handleBodyParserError',
            'compress',
            'methodOverride',
            'poweredBy',
            '$custom',
            'router',
            'www',
            'favicon',
            '404',
            '500'
        ]
    },

    /**
     * The number of seconds to cache flat files on disk being served by Express static middleware
     */
    cache: 31557600000
};
