const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../util/database")
const MyModel = sequelize.define('MyModel', {
    // Define the columns of the table
    id: {
      type: Sequelize.INTEGER,
      unique: true ,
      autoIncrement:true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    }

  });

module.exports=MyModel  
