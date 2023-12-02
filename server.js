import express from "express";
import "dotenv/config";
import mysql from "mysql2/promise";
import config from "./config.js";
const app = express();


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

app.listen(process.env.PORT || 7777, () => {
  console.log(`Server is running on port : ${process.env.PORT || 6000} 🚀`);
  fetchData();
});
