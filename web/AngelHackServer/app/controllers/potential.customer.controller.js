const PotentialCustomer = require('../models/potential.customer.model');
const NewFECustomer = require('../models/new.fe.customer.model');

exports.getpotentialcustomertier2 = (req, res) => {
    PotentialCustomer.find({}, function (err, customers) {
        if (err) {
            return res.send(err);
        }
        return res.json(customers);

    });
};
// exports.getpotentialcustomertier2 = (req, res) => {
//     PotentialCustomer.find({ feCredit: { $exists: true, $ne: [] } }, function (err, customers) {
//         if (err) {
//             return res.send(err);
//         }
//         return res.json(customers);

//     });
// };

exports.getpotentialcustomertier1 = (req, res) => {
    var nowByNumber = new Date().getTime();
    NewFECustomer.findOne({ time: { $lt: nowByNumber } }, function (err1, newestCustomer) {
        if (err1) {
            return res.send(err1);
        } else {
            PotentialCustomer.findById(newestCustomer.id, (err2, fecustomer) => {
                if(err2) {
                    return res.status(500).send(err2);
                }
                PotentialCustomer.find({
                    workingLocation: {
                        $near: {
                            $maxDistance: 100,
                            $geometry: {
                                type: "Point",
                                coordinates: fecustomer.workingLocation.coordinates
                            }
                        }
                    }
                }).find((err3, potentialCustomers) => {
                    if (err3) {
                        res.status(500).send(err3);
                    } else {
                        return res.json(potentialCustomers);
                    }
                });
            });
        }

    });
};

// Find a single note with a noteId
exports.updatetousedfe = (req, res) => {
    // Validate request
    if (!req.body.SSID) {
        return res.status(400).send({
            message: "SSID can not be empty"
        });
    }

    boughtProduct = {
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        yearRelease: req.body.yearRelease
    }

    // Find one by SSID with the request body
    PotentialCustomer.findOneAndUpdate({ SSID: req.body.SSID },
        { $push: { feCredit: boughtProduct } })
        .then((customer, err) => {
            if (!customer) {
                return res.status(404).send({
                    message: "PotentialCustomer not found with SSID " + req.body.SSID + "--" + err
                });
            } else {
                var newFECustomer = new NewFECustomer({ id: customer._id.toString(), time: new Date().getTime() });
                newFECustomer.save(function (err) {
                    if (err) return res.status(404).send({
                        message: "Cannot save new customer not found with SSID " + req.body.SSID + "--" + err
                    }); else {
                        return res.send(customer);
                    }
                    // saved!
                });
            }
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Exception: PotentialCustomer " + req.body.SSID + "--" + err
                });
            }
            return res.status(500).send({
                message: "Error updating PotentialCustomer with SSID " + req.body.SSID + "--" + err
            });
        });
};