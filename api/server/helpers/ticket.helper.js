import WinningTicketModel from '../models/winningTicket.model';

class Ticket {
    /** Generate a number of 10 digits length */
    generateTicket() {
        const MIN = 1_000_000_000;
        const MAX = 9_000_000_000;
        return Math.floor(Math.random() * (MAX - MIN) + MIN);
    }

    /**
     * Distribution the tickets by percentage
     * 60% -> starter and dessert | starter 50% and dessert 50% of startAndDessert
     * 20% -> burger
     * 10% -> menu_day
     * 6% -> menu_choice
     * 4% -> discount
     * @param tickets[]
     */
    distribution(tickets) {
        const TOTAL_TICKETS = tickets.length;
        const starterAndDessert = Math.ceil(0.6 * TOTAL_TICKETS);
        const starter = Math.ceil(0.5 * starterAndDessert);
        const dessert = Math.ceil(0.5 * starterAndDessert);
        const burger = Math.ceil(0.2 * TOTAL_TICKETS);
        const menu_day = Math.ceil(0.1 * TOTAL_TICKETS);
        const menu_choice = Math.ceil(0.06 * TOTAL_TICKETS);
        const discount = Math.ceil(0.04 * TOTAL_TICKETS);

        const percentDistribution = {
            starter: [],
            dessert: [],
            burger: [],
            menu_day: [],
            menu_choice: [],
            discount: [],
        };

        percentDistribution.starter = tickets.splice(0, starter);
        percentDistribution.dessert = tickets.splice(0, dessert);
        percentDistribution.burger = tickets.splice(0, burger);
        percentDistribution.menu_day = tickets.splice(0, menu_day);
        percentDistribution.menu_choice = tickets.splice(0, menu_choice);
        percentDistribution.discount = tickets.splice(0, discount);

        return percentDistribution;
    }

    /**
     * Create a array of tickets with
     * @param quantity
     * quantity == number of tickets
     */
    createTickets(quantity) {
        quantity = parseInt(quantity);

        if (quantity < 10)
            return console.error('The quantity should be greater than 10 !!!');

        let tickets = [];

        for (let i = 0; i < quantity; i++) {
            tickets.push(this.generateTicket());
        }

        tickets = this.distribution(tickets);

        if (!tickets) return false;

        return tickets;
    }

    /**
     * The ticket will create and save with the key ticket_number, and type
     * from createTicket to WinningTicketModel
     */
    addAndSaveTicketNumber(typeOfTicket, keyOfTicket) {
        let ticketModeled = [];
        for (let i = 0; i < typeOfTicket.length; i++) {
            ticketModeled.push({
                ticket_number: typeOfTicket[i],
                type: keyOfTicket,
                validated: false,
                date_created: new Date(),
            });
        }

        WinningTicketModel.collection.insertMany(
            ticketModeled,
            (err, result) => {
                if (err) return console.error(err);
            }
        );
        return true;
    }

    async getRandomTicket() {
        let randomTicket = await WinningTicketModel.aggregate([
            { $sample: { size: 1 } }
        ]);

        if (randomTicket[0].validated === true) {
            randomTicket = await WinningTicketModel.aggregate([
                { $sample: { size: 1 } },
            ]);
        }

        return randomTicket;
    }

    async findTicket(ticket) {
        let ticketFounded = await WinningTicketModel.findOne({ ticket_number: ticket });
        if (ticketFounded) {
            ticketFounded.validated = true;
            await ticketFounded.save();
            return ticketFounded;
        } else {
            return false;
        }
    }

    async updatedCollectionTicket(dataUser) {
        return dataUser
    }
}

export default Ticket;
