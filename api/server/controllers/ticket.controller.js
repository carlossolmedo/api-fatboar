// import TicketModel from '../models/ticket.model';
import Ticket from '../helpers/ticket.helper';

const generateWinningTickets = (req, res) => {
    try {
        const quantity = req.params.quantity;
        const tickets = new Ticket();
        const winningTickets = tickets.createTickets(quantity);

        // Save tickets by percent and type of ticket
        const ticketsStarter = tickets.addAndSaveTicketNumber(
            winningTickets.starter,
            'starter'
        );
        const ticketsDessert = tickets.addAndSaveTicketNumber(
            winningTickets.dessert,
            'dessert'
        );
        const ticketsBurger = tickets.addAndSaveTicketNumber(
            winningTickets.burger,
            'burger'
        );
        const ticketsMenuDay = tickets.addAndSaveTicketNumber(
            winningTickets.menu_day,
            'menu_day'
        );
        const ticketsMenuChoice = tickets.addAndSaveTicketNumber(
            winningTickets.menu_choice,
            'menu_choice'
        );
        const ticketsDiscount = tickets.addAndSaveTicketNumber(
            winningTickets.discount,
            'discount'
        );

        if (
            !ticketsStarter ||
            !ticketsDessert ||
            !ticketsBurger ||
            !ticketsMenuDay ||
            !ticketsMenuChoice ||
            !ticketsDiscount
        ) {
            throw new Error('Cannot save the winning tickets');
        }

        res.status(201).json({
            message: `${quantity} winning tickets was created with success`,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTicket = async (req, res) => {
    try {
        const tickets = new Ticket();
        const randomTicket = await tickets.getRandomTicket();

        if (!randomTicket) {
            throw new Error('Cannot get winning ticket');
        }

        res.status(200).json(randomTicket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.generateWinningTickets = generateWinningTickets;
exports.getTicket = getTicket;
