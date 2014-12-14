/**
 * Blueprint API Configuration
 */

module.exports.blueprints = {
    /**
     * When enabled, GET, POST, PUT and DELETE routes will be generated for every one of a controller's actions
     */
    actions: true,

    /**
     * REST blueprints are the automatically generated routes Sails uses to expose a conventional REST API
     * on top of a controller's `find`, `create`, `update`, and `destroy` actions
     */
    rest: true,

    /**
     * Shortcut routes are simple helpers to provide access to a controller's CRUD methods from your browser's URL bar
     */
    shortcuts: false,

    /**
     * An optional mount path for all blueprint routes on a controller, including `rest`, `actions`, and `shortcuts`
     */
    prefix: '/v1',

    /**
     * Whether to pluralize controller names in blueprint routes
     */
    pluralize: false,

    /**
     * Whether the blueprint controllers should populate model fetches with data from other models which are linked by associations
     */
    populate: true,

    /**
     * Whether to run Model.watch() in the find and findOne blueprint actions
     */
    autoWatch: false,

    /**
     * The default number of records to show in the response from a "find" action
     */
    defaultLimit: 5
};
