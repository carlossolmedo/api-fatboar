import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { db, apiVersion } from './config/config';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './config/swaggerDoc.json';

// Instantiation routes
import UserRoutes from './routes/users';

const app = express();
const version = apiVersion || 'v1';

mongoose
    .connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log(`MongoDB connected in: ${db.name}\n`))
    .catch((err) => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../public')));

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

// Load routes
app.use(`/api/${version}`, UserRoutes);

export default app;
