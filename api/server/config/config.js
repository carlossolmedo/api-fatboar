"use strict";

import dotenv from 'dotenv';

// load config
dotenv.config({ path: `.env.${process.env.NODE_ENV}`});

const mongoUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.rrk6u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
    db: {
        uri: mongoUri
    }
};