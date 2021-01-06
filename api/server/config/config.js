'use strict';

import dotenv from 'dotenv';

// load config
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const apiVersion = process.env.API_VERSION || 'v1';
const urlAPI = `/api/${apiVersion}`;
const routeWithoutAuth = {
    home: `${urlAPI}/`,
    login: `${urlAPI}/auth/login`
};
var mongoUri = '';

switch (process.env.NODE_ENV) {
    case 'prod':
        mongoUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.rrk6u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
        break;

    default:
        mongoUri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=admin`;
        break;
}

module.exports = {
    nodeEnv: process.env.NODE_ENV,
    portEnv: process.env.PORT,
    tokenSecret: process.env.TOKEN_SECRET,
    apiVersion: apiVersion,
    db: {
        uri: mongoUri,
        name: process.env.DB_NAME,
    },
    urlAPI: urlAPI,
    routeWithoutAuth: {
        home: routeWithoutAuth.home,
        login: routeWithoutAuth.login
    }
};
