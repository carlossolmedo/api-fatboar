// All routes
import { urlAPI } from '../config/config';

/** All routes to users management */
export const userRoute = {
    getUsers: `${urlAPI}/users`,
    getUser: `${urlAPI}/user`,
    getUserById: `${urlAPI}/users/:id`,
    addUser: `${urlAPI}/users`,
    updateUser: `${urlAPI}/users/:id`,
    deleteUser: `${urlAPI}/users/:id`,
    getTicketsByUser: `${urlAPI}/users/:id/tickets`
};

/** All routes to authentication */
export const authRoute = {
    signup: `${urlAPI}/auth/signup`,
    login: `${urlAPI}/auth/login`,
    logout: `${urlAPI}/auth/logout`,
    google: `${urlAPI}/auth/google`,
    facebook: `${urlAPI}/auth/facebook`
};

/** All routes to tickets management */
export const ticketRoute = {
    generateWinningTickets: `${urlAPI}/tickets/winning-tickets/generate/:quantity`,
    getTicket: `${urlAPI}/tickets`,
    verifyTicket: `${urlAPI}/tickets/verify`,
    getTicketsWinners: `${urlAPI}/tickets/winners`,
    updateTicketReceived: `${urlAPI}/tickets/winners`,
    getTicketsTotal: `${urlAPI}/tickets/total`,
    getTicketsReceived: `${urlAPI}/tickets/received`,
};
