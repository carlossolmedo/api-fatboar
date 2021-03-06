import express from 'express';
import cors from 'cors';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import { nodeEnv, urlAPI, urlClient } from './config/config';
import DB from './helpers/db.helper';
import authMiddleware from './helpers/auth.helper';
import Ticket from './helpers/ticket.helper';

// Instantiation routes
import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';
import TicketRoutes from './routes/ticket.routes';

const app = express();
const swaggerOptions = YAML.load(`${__dirname}/config/swagger/swaggerDoc.yml`);
const dbAPI = new DB();
const tickets = new Ticket();
const corsOptions = {
    origin: `${urlClient}`,
    methods: '*',
    credentials: true,
    maxAge: 3600,
    optionsSuccessStatus: 204
};

// Connection Database by mongoose
if (nodeEnv !== 'test') {
    dbAPI.connection();
}

// console.log('RANDOM VALUE', );
// tickets.getRandomTicket();

// if (nodeEnv === 'test') {
//     dbAPI.connection();
//     dbAPI.removeOneCollection('winning_tickets');
// }

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../public')));

// CORS
app.use(cors(corsOptions));

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
