import pg from 'pg';

const config = {
    user: 'Myentries',
    database: 'mydairy',
    password: '123',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('connected to the Database');
});