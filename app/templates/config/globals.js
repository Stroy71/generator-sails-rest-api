/**
 * Global Variable Configuration
 */
module.exports.globals = {

    /**
     * Expose the lodash installed in Sails core as a global variable
     */
    _: true,

    /**
     * Expose the async installed in Sails core as a global variable
     */
    async: true,

    /**
     * Expose the sails instance representing your app
     */
    sails: true,

    /**
     * Expose each of your app's services as global variables
     */
    services: true,

    /**
     * Expose each of your app's models as global variables
     */
    models: true
};
