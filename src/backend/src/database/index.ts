import { Sequelize } from "sequelize";
import Income from "./income";

// Open database connection
const sequelize = new Sequelize({
    database: 'sqlite_db',
    dialect: 'sqlite',
    storage: 'db.sqlite',
    host: '127.0.0.1',
})

const models = [Income];

models.forEach(m => m.initialize(sequelize));

sequelize.sync({});

export {
    sequelize as Database,
    Income,
}