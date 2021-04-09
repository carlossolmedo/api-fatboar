import { Router } from 'express';
import { ticketRoute } from './routes';
import ticketController from '../controllers/ticket.controller';

const router = Router();

router.get(
    ticketRoute.generateWinningTickets,
    ticketController.generateWinningTickets
);
router.delete(ticketRoute.deleteWinningTickets, ticketController.deleteWinningTickets);
router.get(ticketRoute.getTicket, ticketController.getTicket);
router.post(ticketRoute.verifyTicket, ticketController.verifyTicket);
router.get(ticketRoute.getTicketsWinners, ticketController.getTicketsWinners);
router.put(ticketRoute.updateTicketReceived, ticketController.updateTicketReceived);
router.get(ticketRoute.getTicketsPlayed, ticketController.getTicketsPlayed);
router.get(ticketRoute.getTicketsReceived, ticketController.getTicketsReceived);
router.get(ticketRoute.getTicketsPercent, ticketController.getTicketsPercent);
router.get(ticketRoute.getNumberOfTickets, ticketController.getNumberOfTickets);

module.exports = router;
