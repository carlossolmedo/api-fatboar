import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import { db, urlAPI } from './config/config';
import authMiddleware from './helpers/auth.helper';

// Instantiation routes
import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';

const app = express();
const swaggerOptions = YAML.load(`${__dirname}/config/swagger/swaggerDoc.yml`);

// Connection Database by mongoose
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
app.use(`${urlAPI}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerOptions, { explorer: false }));

// Middleware
app.use(authMiddleware.protectWithJwt);

// Load routes
app.use(`${urlAPI}`, UserRoutes);
app.use(`${urlAPI}`, AuthRoutes);

export default app;
