import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "./router/routers.js";
import fetchData from "./fetchData.js";
import sequelize from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);


sequelize.sync().then(() => {
  console.log('Database synced successfully.');
}).catch((error) => {
  console.error('Error syncing database:', error);
});


app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port : ${process.env.PORT || 8080} 🚀`);
  // fetchData();
});
