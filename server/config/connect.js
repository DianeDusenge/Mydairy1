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
          createdon VARCHAR(120) NOT NULL
          
        )`;
    const Myinfo = `CREATE TABLE IF NOT EXISTS
        login(
          id SERIAL PRIMARY KEY,
          Username VARCHAR(128) NOT NULL,
          Password VARCHAR(130) NOT NULL
          
        )`;
    const Myentrysignup = `CREATE TABLE IF NOT EXISTS
        signup(
          id SERIAL PRIMARY KEY,
          Allnames VARCHAR(128) NOT NULL,
          Email VARCHAR(128) NOT NULL,
          Username VARCHAR(128) NOT NULL,
          Password VARCHAR(130) NOT NULL
        
          
        )`;
    const queries = `${Myentries};${Myinfo};${Myentrysignup}`;
    // pool.query(Myentries)
    pool.query(queries).then((res) => {
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
});



export {
    pool,
    createTables
};

require('make-runnable');