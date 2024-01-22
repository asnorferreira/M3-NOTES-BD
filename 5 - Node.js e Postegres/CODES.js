const { Client } = require('pg');

const client = new Client();
await client.connect();

const res = await client.query('SELECT NOW()');

await client.end();
// Desta forma a conexão torna-se mais lenta, efetuando query por vez;
// Solução realizar um Pool de Clients

const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 22,
    user: '',
    password: '',
    database: '',
});

const selectTimestamp = async (req, res) => {
    const timestamp = await pool.query('SELECT NOW()');
    return res.json(timestamp);
}

const selectDate = async (req, res) => {
    const date = await pool.query('SELECT CAST(NOW() AS DATE)');
    return res.json(date);
}
// Agrupa conexões reutilizáveis
// Libera a conexão para a próxima chamada
// Encerra conexões automaticamente quando inativas

//JOIN: INNER JOIN; FULL JOIN; LEFT JOIN; RIGHT JOIN;