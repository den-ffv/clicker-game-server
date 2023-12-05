import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

const Point = sequelize.define("Point", {
  imgeUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Point;
