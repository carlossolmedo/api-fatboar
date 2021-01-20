'use strict';

import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV;

// Load environment
dotenv.config({ path: `.env.${NODE_ENV}` });

// Database
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;

// API
const PORT = process.env.PORT;
const API_VERSION = process.env.API_VERSION || 'v1';
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const URL_API = `/api/${API_VERSION}`;
const routeWithoutAuth = {
    home: `${URL_API}/`,
    signup: `${URL_API}/auth/signup`,
    login: `${URL_API}/auth/login`,
    test: `${URL_API}/tickets/store-winning-tickets`,
};

let MONGO_URI = '';

switch (NODE_ENV) {
    case 'prod':
        MONGO_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.rrk6u.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
        break;

    default:
        MONGO_URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:27017/${DB_NAME}?authSource=admin`;
        break;
}

module.exports = {
    nodeEnv: NODE_ENV,
    portEnv: PORT,
    tokenSecret: TOKEN_SECRET,
    apiVersion: API_VERSION,
    db: {
        uri: MONGO_URI,
        name: DB_NAME,
    },
    urlAPI: URL_API,
    routeWithoutAuth: {
        home: routeWithoutAuth.home,
        signup: routeWithoutAuth.signup,
        login: routeWithoutAuth.login,
        test: routeWithoutAuth.test,
    },
};
