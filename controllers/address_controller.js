const Address = require('../models/address_model');

exports.address_create = function (req, res) {
    console.log(req.query)
    let address = new Address(
        {
            name: req.query.name,
            username: req.query.username,
            email:req.query.email,
            phone:req.query.phone,
            website:req.query.website,
            address: {street: req.query.street, geo:{lat: req.query.lat,lng: req.query.lng,
                suite: req.query.suite,
                city: req.query.city,
                zipcode: req.query.zipcode,
            }},
            company: { name: req.query.company_name,catchPhrase: req.query.catchPhrase,
                bs: req.query.bs }
        }
    );
    console.log(address)
    address.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Address Created successfully')
    })
};