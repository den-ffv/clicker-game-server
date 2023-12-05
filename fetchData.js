import mysql from "mysql2/promise";
import config from "./config/config.js";

async function fetchData() {
  try {
    const connection = await mysql.createConnection(config);
    console.log("DB successfully attached... bitch 🤖");

    // Closing the base
    await connection.end();
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
}
export default fetchData;
