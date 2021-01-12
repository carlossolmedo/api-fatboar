import TicketModel from '../models/ticket.model';
import WinningTicketModel from '../models/winningTicket.model';

class Ticket {

    generateWinningTickets() {
        return 'winning tickets';
    }

    /** Generate a number of 10 digits length */
    generateTicket() {
        const MIN = 1_000_000_000;
        const MAX = 9_000_000_000;
        return Math.floor(Math.random() * (MAX - MIN) + MIN);
    }

    async testRoute(req, res) {
        try {
            // const distribution = this.distribution();

            const distribution = {
                starterAndDessert: {
                    starter: [
                        7695274501, 6329580856,
                        6651784689, 7039693709,
                        7737854607, 4885467926,
                        6573385333, 8061647593,
                        6247188524, 3036873844,
                        3347078971, 4468962092,
                        4351410206, 7254878804,
                        8707132658
                    ],
                        dessert: [
                            1544776141, 4520533172,
                            2367523469, 4317393486,
                            6818141921, 6119498684,
                            5873549945, 2368434026,
                            1520345332, 6700638342,
                            8078805224, 1991969389,
                            2802441375, 5716448489,
                            7697791550
                        ]
                },
                burger: [
                    4906494370, 5980771259,
                    2643821563, 2066351450,
                    4738897685, 2999347128,
                    5772765937, 4298708732,
                    1898157050, 2893029487
                ],
                    menu_day: [2775388810, 3047546646, 2125100483, 2999036172, 5431618296],
                        menu_choice: [6838126215, 2269999622, 7092316927],
                            discount: [2327397108, 5026122481]
            }

            console.log('DISTRIBUTION: ', distribution);
            const result = '';

            for (let i = 0; i < distribution.discount.length; i++) {
                const ticketDiscount = new WinningTicketModel({
                    ticket_number: distribution.discount[i],
                    type: 'discount'
                });
                result = await ticketDiscount.save();
            }

            if (result) {
                res.status(200).json({ message: 'ticket saved' });
            }

        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    /**
     * Distribution the tickets by percentage
     * 60% -> starter and dessert | starter 50% and dessert 50% of startAndDessert
     * 20% -> burger
     * 10% -> menu_day
     * 6% -> menu_choice
     * 4% -> discount
     * @param tickets
     */
    distribution(tickets) {
        const TOTAL_TICKETS     = tickets.length;
        const starterAndDessert = Math.ceil(0.60 * TOTAL_TICKETS);
        const starter           = Math.ceil(0.50 * starterAndDessert);
        const dessert           = Math.ceil(0.50 * starterAndDessert);
        const burger            = Math.ceil(0.20 * TOTAL_TICKETS);
        const menu_day          = Math.ceil(0.10 * TOTAL_TICKETS);
        const menu_choice       = Math.ceil(0.06 * TOTAL_TICKETS);
        const discount          = Math.ceil(0.04 * TOTAL_TICKETS);

        const percentDistribution = {
            starterAndDessert: {
                starter: [],
                dessert: []
            },
            burger: [],
            menu_day: [],
            menu_choice: [],
            discount: []
        }
        console.log('starter: ', starter);
        console.log('dessert: ', dessert);
        console.log('burger: ', burger);
        console.log('menu_day: ', menu_day);
        console.log('menu_choice: ', menu_choice);
        console.log('discount: ', discount);

        percentDistribution.starterAndDessert.starter = tickets.splice(0, starter);
        percentDistribution.starterAndDessert.dessert = tickets.splice(0, dessert);
        percentDistribution.burger = tickets.splice(0, burger);
        percentDistribution.menu_day = tickets.splice(0, menu_day);
        percentDistribution.menu_choice = tickets.splice(0, menu_choice);
        percentDistribution.discount = tickets.splice(0, discount);

        // for (let i = 0; i < discount; i++) {
        //     const ticketDiscount = new WinningTicketModel({
        //         ticket_number: percentDistribution.discount[i],
        //         type: 'discount'
        //     });
        //     ticketDiscount.save();
        // }

        // console.log('\npercent: ', percentDistribution);

        // console.log('NEW TICKETS: ', tickets);
        // return percentDistribution;

    }

    /** Create a array of tickets with @param quantity elements */
    createTickets(quantity) {
        quantity = parseInt(quantity);

        if (quantity < 10) return console.error('The quantity should be greater than 10 !!!');

        let tickets = [];

        for (let i = 0; i < quantity; i++) {
            tickets.push(this.generateTicket());
        }

        this.distribution(tickets);

        return tickets;
    }
}

module.exports = Ticket;
