import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const User = sequelize.define('user', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     
})

sequelize.sync()
    .then(() => {
        console.log('La tabla de usuer ha sido sincronizada en la base de datos.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla de user:', error);
    });
