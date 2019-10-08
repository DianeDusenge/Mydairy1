import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
// const pg = require('pg');
// const dotenv = require('dotenv');

const config = {
    connectionString: process.env.DATABASE_URL
        // user: 'postgres',
        // database: 'mydairy',
        // password: '123',
        // port: 5432,
        // max: 10,
        // idleTimeoutMillis: 30000,

};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('connected to the Database');
});
const createTables = () => {
    const Myentries = `CREATE TABLE IF NOT EXISTS
        users(
          id SERIAL PRIMARY KEY,
          title VARCHAR(128) NOT NULL,
          description VARCHAR(130) NOT NULL,
         CreatedOn VARCHAR(120) NOT NULL
          
        )`;
    pool.query(Myentries)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};
pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});



module.exports = {
    pool,
    createTables
};

require('make-runnable');