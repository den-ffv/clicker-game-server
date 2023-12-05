import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Point from "./Point.js";

const User = sequelize.define("User", {
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
});

User.hasMany(Point);
Point.belongsTo(User);

export default User;
