import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { db, apiVersion } from './config/config';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

// Instantiation routes
import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';

const app = express();
const version = apiVersion || 'v1';
const swaggerOptions = YAML.load(`${__dirname}/config/swagger/swaggerDoc.yml`);


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
app.use(`/api/${version}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerOptions, { explorer: false }));

// Load routes
app.use(`/api/${version}`, UserRoutes);
app.use(`/api/${version}`, AuthRoutes);

export default app;
