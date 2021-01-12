import { Router } from 'express';
import { ticketRoute } from './routes';
import Ticket from '../controllers/ticket.controller';

const router = Router();
const tickets = new Ticket();

router.post(ticketRoute.storeWinningTickets, tickets.testRoute);

module.exports = router;
