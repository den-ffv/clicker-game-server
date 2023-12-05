import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Role = sequelize.define("Role", {
  id: {
    type: DataTypes.INET,
  },
  value: {
    type: DataTypes.STRING,
    unique: true,
    defaultValue: "user",
  },
});

export default Role