import WinningTicketModel from '../models/winningTicket.model';
import TicketModel from '../models/ticket.model';


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
    addAndSaveTicketNumber(typeOfTicket, valueTypeOfTicket) {
        let ticketModeled = [];
        for (let i = 0; i < typeOfTicket.length; i++) {
            ticketModeled.push({
                ticket_number: typeOfTicket[i],
                type: valueTypeOfTicket,
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
        ]).match({ validated: { $in: [false] } });

        return randomTicket;
    }

    async findTicketValid(ticket) {
        const ticketFounded = await WinningTicketModel.findOne({ ticket_number: ticket.ticket_number });
        const dataTicketFounded = Object.assign({}, ticketFounded._doc);

        dataTicketFounded.error = {
            found: true,
            validated: false
        };

        if (dataTicketFounded) {
            if (dataTicketFounded.validated === false) {
                dataTicketFounded.user_id = ticket.user_id;
                return dataTicketFounded;
            } else {
                dataTicketFounded.error.validated = true;
                return dataTicketFounded;
            }
        } else {
            dataTicketFounded.error.found = false;
            return dataTicketFounded;
        }
    }

    async saveTicket(ticket) {
        const ticketPlayed = new TicketModel({
            user_id: ticket.user_id,
            ticket_number: ticket.ticket_number,
            type: ticket.type
        });

        await WinningTicketModel.updateOne({ticket_number: ticket.ticket_number}, {
            validated: true
        }).then((res) => {
            if (res.ok) ticketPlayed.save();
        }).catch((err) => {
            console.error(err);
        });
    }

    async populateTicketsWithUsers() {
        const ticketsWithUsers = await TicketModel.find().populate('user_id', ['username', 'email']).exec();
        return ticketsWithUsers;
    }

    async updateTicketReceived(ticket) {
        const fieldUpdated = await TicketModel.updateOne({ ticket_number: ticket.ticket_number }, { received: ticket.received});
        return fieldUpdated;
    }

    async countTotalTickets() {
        const totalTickets = await TicketModel.countDocuments();
        return totalTickets;
    }

    async countTotalTicketsReceived() {
        const totalTicketsReceived = await TicketModel.where({ received: true }).countDocuments();
        return totalTicketsReceived;
    }

    async countTicketsByPrizes(prizes) {
        let countPrizes = {};
        countPrizes.starter = await TicketModel.where({ type: prizes.starter }).countDocuments();
        countPrizes.dessert = await TicketModel.where({ type: prizes.dessert }).countDocuments();
        countPrizes.burger = await TicketModel.where({ type: prizes.burger }).countDocuments();
        countPrizes.menu_day = await TicketModel.where({ type: prizes.menu_day }).countDocuments();
        countPrizes.menu_choice = await TicketModel.where({ type: prizes.menu_choice }).countDocuments();
        countPrizes.discount = await TicketModel.where({ type: prizes.discount }).countDocuments();

        return countPrizes;
    }
}

export default Ticket;
