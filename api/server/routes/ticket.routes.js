import { Router } from 'express';
import { ticketRoute } from './routes';
import ticketController from '../controllers/ticket.controller';

const router = Router();

router.get(
    ticketRoute.generateWinningTickets,
    ticketController.generateWinningTickets
);
router.get(ticketRoute.getTicket, ticketController.getTicket);
router.post(ticketRoute.verifyTicket, ticketController.verifyTicket);
router.get(ticketRoute.getTicketsWinners, ticketController.getTicketsWinners);

module.exports = router;
