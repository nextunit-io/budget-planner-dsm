import { Sequelize } from "sequelize";
import Income from "./income";
import Payment from "./payment";
import User from "./user";

// Open database connection
const sequelize = new Sequelize({
    database: 'sqlite_db',
    dialect: 'sqlite',
    storage: 'db.sqlite',
    host: '127.0.0.1',
});

const models = [User, Income, Payment];

models.forEach(m => m.initialize(sequelize));

Income.belongsTo(User, {
    onDelete: 'CASCADE',
});
User.hasMany(Income);

Payment.belongsTo(User, {
    onDelete: 'CASCADE',
});
User.hasMany(Payment);

sequelize.sync();

export {
    sequelize as Database,
    Income, Payment, User
}