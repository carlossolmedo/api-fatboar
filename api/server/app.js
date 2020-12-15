import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { db, apiVersion } from './config/config';

// Declare routes
import UserRoutes from './routes/users';

const app = express();
const version = apiVersion || 'v1';
const optionsDB = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(db.uri, optionsDB)
    .then(() => console.log(`MongoDB connected in: ${db.name}\n`))
    .catch((err) => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../public')));

// Load routes
app.use(`/api/${version}`, UserRoutes);

export default app;
