const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '24102002',
    database: 'conexao_node_pg',
});

module.exports = pool