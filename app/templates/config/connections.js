/**
 * Connections API config
 */

module.exports.connections = {
    /**
     * MySQL configuration
     */
    mysql: {
        adapter: 'sails-mysql',
        host: '<%= answers.databaseHost %>',
        port: 3306,
        user: '<%= answers.databaseUser %>',
        password: '<%= answers.databasePassword %>',
        database: '<%= answers.databaseName %>',
        charset: 'utf8',
        collation: 'utf8_swedish_ci'
    },

    /**
     * MongoDB configuration
     */
    mongo: {
        adapter: 'sails-mongo',
        host: '<%= answers.databaseHost %>',
        port: 27017,
        user: '<%= answers.databaseUser %>',
        password: '<%= answers.databasePassword %>',
        database: '<%= answers.databaseName %>'
        //replSet: {
        //    servers: [
        //        {
        //            host: 'secondary1.localhost',
        //            port: 27017
        //        }
        //    ],
        //    options: {} // http://mongodb.github.io/node-mongodb-native/api-generated/replset.html
        //}
    },

    /**
     * PostgreSQL configuration
     */
    postgresql: {
        adapter: 'sails-postgresql',
        host: '<%= answers.databaseHost %>',
        port: 5432,
        user: '<%= answers.databaseUser %>',
        password: '<%= answers.databasePassword %>',
        database: '<%= answers.databaseName %>',
        pool: false,
        ssl: false
    },

    /**
     * Redis configuration
     */
    redis: {
        adapter: 'sails-redis',
        host: '<%= answers.databaseHost %>',
        port: 6379,
        password: '<%= answers.databasePassword %>',
        database: '<%= answers.databaseName %>',
        options: {
            parser: 'hiredis',
            return_buffers: false,
            detect_buffers: false,
            socket_nodelay: true,
            no_ready_check: false,
            enable_offline_queue: true
        }
    }
};
