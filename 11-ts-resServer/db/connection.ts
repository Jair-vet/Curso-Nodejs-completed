import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', 'CARLOS2300j', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;