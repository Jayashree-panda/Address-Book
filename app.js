const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const app = express();

let port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



const address = require('./routes/address_route'); 
app.use('/address', address);

let dev_db_url = 'mongodb://spektacom:spektacom12@ds063240.mlab.com:63240/address_book';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});