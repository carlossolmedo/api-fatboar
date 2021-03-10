import Ticket from '../helpers/ticket.helper';

exports.generateWinningTickets = (req, res) => {
    try {
        const quantity = req.params.quantity;
        const tickets = new Ticket();
        const winningTickets = tickets.createTickets(quantity);

        // Save tickets by percent and type of ticket
        const ticketsStarter = tickets.addAndSaveTicketNumber(
            winningTickets.starter,
            'une entrée au choix'
        );
        const ticketsDessert = tickets.addAndSaveTicketNumber(
            winningTickets.dessert,
            'un dessert au choix'
        );
        const ticketsBurger = tickets.addAndSaveTicketNumber(
            winningTickets.burger,
            'un burger au choix'
        );
        const ticketsMenuDay = tickets.addAndSaveTicketNumber(
            winningTickets.menu_day,
            'un menu du jour'
        );
        const ticketsMenuChoice = tickets.addAndSaveTicketNumber(
            winningTickets.menu_choice,
            'un menu au choix'
        );
        const ticketsDiscount = tickets.addAndSaveTicketNumber(
            winningTickets.discount,
            '70% réduction'
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

/** Get one winning ticket random */
exports.getTicket = async (req, res) => {
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

/** Verify ticket played */
exports.verifyTicket = async (req, res) => {
    try {
        const tickets = new Ticket();
        const regex = /\d{10}/g;
        const ticketUser = req.body;

        if(!regex.test(ticketUser.ticket_number)) {
            return res.status(400).json({ message: 'format ticket not valid'});
        }

        const ticketVerified = await tickets.findTicketValid(ticketUser);

        if (ticketVerified.error.found === false) {
            return res.status(404).json({ message: `ticket number: ${ticketUser.ticket_number} not found`});
        }

        if (ticketVerified.error.validated) {
            return res.status(401).json({ message: `ticket number: ${ticketUser.ticket_number} has already been validated` });
        }

        await tickets.saveTicket(ticketVerified);

        res.status(200).json(ticketVerified);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

/** Get all tickets with users information */
exports.getTicketsWinners = async (req, res) => {
    try {
        const tickets = new Ticket();
        const ticketsWithUsers = await tickets.populateTicketsWithUsers();
        res.status(200).json(ticketsWithUsers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
