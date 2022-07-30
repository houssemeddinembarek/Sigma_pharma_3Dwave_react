'use strict';
const mongoose = require('mongoose');

// const DB_URL='mongodb://u3pfs1k5lnpdm7fjywnr:HtNo5Akd8JRfD8xZYcmY@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bctipxkzdpcqozn?replicaSet=rs0'
// const DB_URL='mongodb+srv://houssem:<password>@cluster0.5goh1.mongodb.net/test'
const DB_URL='mongodb://root:root@127.0.0.1:27017/mongodb'

module.exports = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}