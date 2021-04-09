import Ticket from '../helpers/ticket.helper';

const prizes = {
    starter: 'une entrée au choix',
    dessert: 'un dessert au choix',
    burger: 'un burger au choix',
    menu_day: 'un menu du jour',
    menu_choice: 'un menu au choix',
    discount: '70% réduction'
}

exports.generateWinningTickets = (req, res) => {
    try {
        const quantity = req.params.quantity;
        const tickets = new Ticket();
        const winningTickets = tickets.createTickets(quantity);

        // Save tickets by percent and type of ticket
        const ticketsStarter = tickets.addAndSaveTicketNumber(
            winningTickets.starter,
            prizes.starter
        );
        const ticketsDessert = tickets.addAndSaveTicketNumber(
            winningTickets.dessert,
            prizes.dessert
        );
        const ticketsBurger = tickets.addAndSaveTicketNumber(
            winningTickets.burger,
            prizes.burger
        );
        const ticketsMenuDay = tickets.addAndSaveTicketNumber(
            winningTickets.menu_day,
            prizes.menu_day
        );
        const ticketsMenuChoice = tickets.addAndSaveTicketNumber(
            winningTickets.menu_choice,
            prizes.menu_choice
        );
        const ticketsDiscount = tickets.addAndSaveTicketNumber(
            winningTickets.discount,
            prizes.discount
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

exports.deleteWinningTickets = async (req, res) => {
    try {
        const winningTickets = new Ticket();
        const deleteWinningTickets = await winningTickets.deleteWinningTickets();
        if (deleteWinningTickets) { res.status(200).json(deleteWinningTickets); }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/** Get one winning ticket random */
exports.getTicket = async (req, res) => {
    try {
        const tickets = new Ticket();
        const randomTicket = await tickets.getRandomTicket();
        if (!randomTicket) { throw new Error('Cannot get winning ticket'); }
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

exports.updateTicketReceived = async (req, res) => {
    try {
        const tickets = new Ticket();
        const ticketReceived = req.body;
        const updateField = await tickets.updateTicketReceived(ticketReceived);
        if (updateField.ok) {
            res.status(200).json({ message: `Ticket ${ticketReceived.ticket_number} value received updated with success`});
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTicketsPlayed = async (req, res) => {
    try {
        const tickets = new Ticket();
        const totalTickets = await tickets.countTotalTickets();
        res.status(200).json(totalTickets);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTicketsReceived = async (req, res) => {
    try {
        const tickets = new Ticket();
        const totalTicketsReceived = await tickets.countTotalTicketsReceived();
        res.status(200).json(totalTicketsReceived);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTicketsPercent = async (req, res) => {
    try {
        const tickets = new Ticket();
        const ticketsByPercentage = await tickets.countTicketsByPrizes(prizes);
        res.status(200).json(ticketsByPercentage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
/** Get the total number of tickets */
exports.getNumberOfTickets = async (req, res) => {
    try {
        const tickets = new Ticket();
        const numberOfTickets = await tickets.countNumberOfTickets();
        res.status(200).json(numberOfTickets);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
