import mysql from 'mysql2';
import dotenv from 'dotenv';

// Lataa ympäristömuuttujat .env-tiedostosta
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const promisePool = pool.promise();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD); // Tämä pitäisi näyttää salasanan
console.log('DB_NAME:', process.env.DB_NAME);

export default promisePool;
