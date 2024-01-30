import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '24102002',
    database: 'autenticacao_criptografia',
});

export default pool;