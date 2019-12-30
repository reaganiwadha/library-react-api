const {
    connectionString
} = require('./config');

module.exports = {
    development: {
        client: 'pg',
        connection: connectionString,
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds/dev'
        },
        useNullAsDefault: true
    },

    test: {
        client: 'pg',
        connection: connectionString,
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds/test'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'pg',
        connection: connectionString,
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds/production'
        },
        useNullAsDefault: true
    }
}