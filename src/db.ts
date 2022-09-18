import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const seqDataBase = new Sequelize('db', {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    // dialect for proxy
    //  nodemon не будет работать тк нужно поставить БД
});

export default seqDataBase;
