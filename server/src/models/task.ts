import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { User } from './user';

export const Task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
})
Task.belongsTo(User, { foreignKey: 'user_id' });

sequelize.sync()
    .then(() => { 
        console.log('La tabla de task ha sido sincronizada en la base de datos.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla de task:', error);
    });