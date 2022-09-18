import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
// import {resolve} from 'path';
import { json, urlencoded } from 'body-parser';

import { errorHandler } from './middleware/errorMiddleware';
import router from './router/router';
import seqDataBase from './db';

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(json());
app.use(fileUpload({})); // загрузка файла на сервер
// app.use(express.static(resolve(__dirname, 'static'))); //upload static file
app.use(urlencoded({ extended: true }));

app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try {
        seqDataBase.authenticate();
        seqDataBase.sync();
        app.listen(PORT || 5050, () => {
            console.log(`Server on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
