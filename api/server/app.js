import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import { urlAPI, nodeEnv } from './config/config';
import DB from './helpers/db.helper';
import authMiddleware from './helpers/auth.helper';
import Ticket from './controllers/ticket.controller';

// Instantiation routes
import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';
import TicketRoutes from './routes/ticket.routes';

const app = express();
const swaggerOptions = YAML.load(`${__dirname}/config/swagger/swaggerDoc.yml`);
const dbAPI = new DB();
const tickets = new Ticket();

// Connection Database by mongoose
if (nodeEnv !== 'test') {
    dbAPI.connection();
}

// console.log('TICKETS: ', tickets.createTickets(50));


// if (nodeEnv === 'test') {
//     db.connection();
//     db.removeOneCollection('users');
// }

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../public')));

// API Documentation
app.use(
    `${urlAPI}/docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerOptions, { explorer: false })
);

// test
app.get('/test', (req, res) => {
    res.send('Hello world!');
});

// Middleware
app.use(authMiddleware.protectWithJwt);

// Load routes
app.use(UserRoutes);
app.use(AuthRoutes);
app.use(TicketRoutes);

export default app;
