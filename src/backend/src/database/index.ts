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

// TODO: provided default user needs to be connected to the Synology SSO
// GET SSO SDK from https://<ip>:5001/webman/sso/synoSSO-1.0.0.js
// Documentation: https://global.download.synology.com/download/Document/Software/DeveloperGuide/Package/SSOServer/All/enu/Synology_SSO_API_Guide.pdf
const DefaultUser: Promise<User> = new Promise(async (resolve) => {
    const users = await User.findAll();
    if (users.length === 0) {
        resolve(User.create({
            firstname: 'Testfirstname',
            lastname: 'testlastname',
            createdAt: new Date(),
            active: true,
        }));
    } else {
        resolve(users[0]);
    }
});


export {
    sequelize as Database,
    Income, Payment, User, DefaultUser,
}