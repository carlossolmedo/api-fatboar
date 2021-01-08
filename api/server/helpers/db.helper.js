import mongoose from 'mongoose';
import { db } from '../config/config';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

class DB {
    /** Instance connection MongoDB with NODE_ENV */
    async connection() {
        try {
            await mongoose.connect(db.uri, options);
            return console.log(`MongoDB connected in: ${db.name}\n`);
        } catch (error) {
            return console.log(error);
        }
    }

    async close() {
        try {
            await mongoose.disconnect();
            return console.log('MongoDB disconnected');
        } catch (error) {
            return console.log(error);
        }
    }

    removeOneCollection(collectionToDelete) {
        const dbConnection = mongoose.connection;

        if (!dbConnection) {
            throw new Error(`Database not connected ${dbConnection}`);
        }

        dbConnection.db
            .collection(collectionToDelete)
            .deleteMany((error, result) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(
                        `collection: ${collectionToDelete} remove with success`
                    );
                }
            });
    }

    dropOneCollection() {
        const dbConnection = mongoose.connection;

        if (!dbConnection) {
            throw new Error(`Database not connected ${dbConnection}`);
        }

        dbConnection.once('open', () => {
            console.log('MongoDB connected from db.helper: dropCollection()');
            dbConnection.dropCollection(collection, (error, res) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`collection: ${collection} drop with success`);
                }
            });
        });
    }

    listCollections() {
        const dbConnection = mongoose.connection;

        if (!dbConnection) {
            throw new Error(`Database not connected ${dbConnection}`);
        }

        dbConnection.once('open', () => {
            console.log('MongoDB connected from db.helper: listCollection()');
            dbConnection.db.listCollections().toArray(function (error, names) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`Collections in ${db.name} :`);
                    for (let i = 0; i < names.length; i++) {
                        console.log('-> ', names[i].name);
                    }
                }
            });
        });
    }
}

module.exports = DB;

/** Instance connection MongoDB with NODE_ENV */
// const connection = () => {
//     mongoose
//         .connect(db.uri, options)
//         .then(() => console.log(`MongoDB connected in: ${db.name}\n`))
//         .catch((error) => console.log(error));
// };

// const close = () => {
//     mongoose
//         .disconnect()
//         .then(() => console.log('MongoDB disconnected'))
//         .catch((error) => console.log(error))
// };

// const removeOneCollection = (collectionToDelete) => {
//     const dbConnection = mongoose.connection;

//     if (!dbConnection) {
//         throw new Error(`Database not connected ${dbConnection}`);
//     }

//     dbConnection.db.collection(collectionToDelete).deleteMany((error, result) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(`collection: ${collectionToDelete} remove with success`);
//         }
//     });
// };

// const dropOneCollection = (collection) => {
//     const dbConnection = mongoose.connection;

//     if (!dbConnection) {
//         throw new Error(`Database not connected ${dbConnection}`);
//     }

//     dbConnection.once('open', () => {
//         console.log('MongoDB connected from db.helper: dropCollection()');
//         dbConnection.dropCollection(collection, (error, res) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(`collection: ${collection} drop with success`);
//             }
//         });
//     });
// }

// const listCollections = () => {
//     const dbConnection = mongoose.connection;

//     if (!dbConnection){
//         throw new Error(`Database not connected ${dbConnection}`);
//     }

//     dbConnection.once('open', () => {
//         console.log('MongoDB connected from db.helper: listCollection()');
//         dbConnection.db.listCollections().toArray(function (error, names) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(`Collections in ${db.name} :`);
//                 for (let i = 0; i < names.length; i++) {
//                     console.log('-> ', names[i].name);
//                 }
//             }
//         });
//     });
// };

// exports.connection          = connection;
// exports.close               = close;
// exports.removeOneCollection = removeOneCollection;
// exports.dropOneCollection   = dropOneCollection;
// exports.listCollections     = listCollections;
