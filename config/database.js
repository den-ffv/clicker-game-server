import { Sequelize } from "sequelize";

const sequelize = new Sequelize("click_game_bd", "root", "root", {
//   host: "localhost",
  dialect: "mysql",
  host: "127.0.0.1",
  port: parseInt(process.env.DB_PORT),
    operatorAlias:true,
    logging:false,
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
});

export default sequelize;
