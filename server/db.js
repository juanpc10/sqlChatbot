const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  password: 'Rebecoch1!',
  host: 'localhost',
  database: 'datab'
})

module.exports = pool;