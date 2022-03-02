"use strict";
const { Sequelize, DataTypes } = require('sequelize');
const clothes = require('./clothes.js')
const food = require('./food.js')
const Collection = require('./collection-class')
require('dotenv').config()
// const POSTGRES_URL = process.env.DATABASE_URL || 'postgresql://mujahedyousef:0000@localhost:5432/my_db'
// let sequelizeOptions = {
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false,
//         }
//     }
// };
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL ; // npm i sqlite3

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions)
let clothesModel = clothes(sequelize, DataTypes);
let foodModel = food(sequelize, DataTypes);

let clothesCollect = new Collection(clothesModel);
let foodCollect = new Collection(foodModel);

module.exports = {
    db: sequelize,
    clothesCollection: clothesCollect,
    foodCollection: foodCollect
}