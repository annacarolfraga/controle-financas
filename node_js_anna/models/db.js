const Sequelize = require("sequelize")

const sequelize = new Sequelize('banco_dados', 'celkone', '123456',{
    host:'localhost',
    dialect: 'mysql'
})

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}