import { where } from "sequelize";
import config from "../config/config.js";
import fetchData from "../fetchData.js";
import User from "../models/User.js";

class UserController {
  async registration(req, res) {
    try {
      const { username, email, password } = req.body;

      const candedat = await User.findOne({ where: { email } });

      if (candedat) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      }
      const user = await User.create({ username, email, password });
      res
        .status(201)
        .json({ message: "User registered successfully", userId: user.id });

      // res.send("qweqweqeweq");
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "The error at" });
    }
  }

  async login(req, res) {
    try {
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Помилка при " });
    }
  }
  async logout(req, res) {
    try {
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Помилка при " });
    }
  }
  async removeUser(req, res) {
    try {
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Помилка при " });
    }
  }
  async getOneUser(req, res) {
    try {
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Помилка при " });
    }
  }
  async getUsers(req, res) {
    try {
      const sqlQuery = "SELECT * FROM game_user";

      fetchData().query(sqlQuery, (err, results, fields) => {
        if (err) {
          console.error("Inquiry error:", err);
          res.status(500).json({ message: "Internal Server Error" });
        } else {
          res.status(200).json(results);
          res.send(results);
        }
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Error when receiving users" });
    }
  }
}

export default new UserController();
