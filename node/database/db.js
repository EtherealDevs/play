import { Sequelize } from 'sequelize';

const db= new Sequelize('react_db', 'root','',{
    host: 'localhost',
    dialect: 'mysql',
})


export default db