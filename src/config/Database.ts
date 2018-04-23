/**
 * config.Database
 * ------------------------------------
 *
 * Here we configure our database connection and
 * our ORM 'bookshelf'.
 *
 * Here would be the place to add more bookshelf plugins.
 */

import * as knex from 'knex';
import * as bookshelf from 'bookshelf';


export const DatabaseConfig = {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_CONNECTION,
    pool: {
        min: parseInt(process.env.DB_POOL_MIN, 10),
        max: parseInt(process.env.DB_POOL_MAX, 10),
        afterCreate: (conn, cb) => {
            conn.run('PRAGMA foreign_keys = ON', cb);
        }
    },
    migrations: {
        directory: process.env.DB_MIGRATION_DIR,
        tableName: process.env.DB_MIGRATION_TABLE
    },
    // not used anymore, potentially we can delete this.
    seeds: {
        directory: process.env.DB_SEEDS_DIR
    },
    useNullAsDefault: true,
    // debug: true
    debug: false

};

export const Knex = (): knex => knex(DatabaseConfig);

export const Bookshelf: bookshelf = bookshelf(Knex() as any);
Bookshelf.plugin(['bookshelf-camelcase']);
