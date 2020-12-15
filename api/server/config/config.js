'use strict';

import dotenv from 'dotenv';

// load config
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const mongoUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.rrk6u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
    nodeEnv: process.env.NODE_ENV,
    portEnv: process.env.PORT,
    apiVersion: process.env.API_VERSION,
    db: {
        uri: mongoUri,
        name: process.env.DB_NAME,
    },
};
