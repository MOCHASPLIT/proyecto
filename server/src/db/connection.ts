import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sortix83_guerrero', 'sortix83_guerrero', 'Ujp^P}91B1rx',{
    host: '207.174.215.160',
    dialect:'mysql',
    port: 3306,
});

export default sequelize; 