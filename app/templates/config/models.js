/**
 * Default model configuration
 */

module.exports.models = {
    /**
     * Your app's default connection
     */
    connection: '<%= answers.databaseAdapter.toLowerCase() %>',

    /**
     * How and whether Sails will attempt to automatically rebuild the tables/collections/etc. in your schema
     */
    migrate: 'alter'
};
