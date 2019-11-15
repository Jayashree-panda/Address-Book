const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddressSchema = new Schema({
    
        name: String,
        username: String,
        email: String,
        address: {
          street: String,
          suite: String,
          city: String,
          zipcode: String,
          geo: {
            lat: String,
            lng: String
          }
        },
        phone: String,
        website: String,
        company: {
          name: String,
          catchPhrase: String,
          bs: String
        }
      },
    );


// Export the model
module.exports = mongoose.model('Address', AddressSchema);