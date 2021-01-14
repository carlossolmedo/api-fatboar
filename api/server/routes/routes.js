// All routes
import { urlAPI } from '../config/config';

/** All routes to users management */
export const userRoute = {
    getUsers: `${urlAPI}/users`,
    getUserById: `${urlAPI}/users/:id`,
    addUser: `${urlAPI}/users`,
    updateUser: `${urlAPI}/users/:id`,
    deleteUser: `${urlAPI}/users/:id`,
};

/** All routes to authentication */
export const authRoute = {
    signup: `${urlAPI}/auth/signup`,
    login: `${urlAPI}/auth/login`,
    google: `${urlAPI}/auth/google`,
    facebook: `${urlAPI}/auth/facebook`,
};

export const ticketRoute = {
    generateWinningTickets: `${urlAPI}/tickets/winning-tickets/generate/:quantity`,
    getTicket: `${urlAPI}/tickets`,
};
