import {Sequelize} from 'sequelize';
import {dbConfig} from '../config/database.js';
import {users} from './users.model.js';
import {laundries} from './laundries.model.js';
import {transactions} from './transactions.model.js';
import {laundryStatuses} from './laundryStatuses.model.js';
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.op = Sequelize.Op;
db.users = users(sequelize, Sequelize);
db.laundries = laundries(sequelize, Sequelize);
db.transactions = transactions(sequelize, Sequelize);
db.laundryStatuses = laundryStatuses(sequelize, Sequelize);
db.users.hasOne(db.laundries, {foreignKey: 'user_id'});
db.laundries.belongsTo(db.users, {foreignKey: 'user_id'});
export default db;
