import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './db/settings';
import mongoose from 'mongoose';
import { authRouter } from './routes/router.generator';

// Creation of MongoDB Connection
if (!config.host || !config.dbname) {
    throw 'Database configuration is missing ...';
} else {
    mongoose.connect(`mongodb://${config.host}/${config.dbname}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB successfully connected !');
}

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/auth', authRouter);

export default app;