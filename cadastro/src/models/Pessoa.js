const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Pessoa extends Model {}

Pessoa.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Pessoa',
});

module.exports = Pessoa;
