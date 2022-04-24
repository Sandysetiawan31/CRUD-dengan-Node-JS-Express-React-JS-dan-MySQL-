 import { Sequelize } from "sequelize";

 const db =  new Sequelize('crude_db','root','',{
     host: 'localhost',
     dialect: 'mysql'
 });

 export default db;