const mongoose = require('mongoose');

const newfecustomer = new mongoose.Schema({
    id: String,
    time: Number
}, { timestamps: true });

const NewFECustomer = mongoose.model('newfecustomer', newfecustomer);

module.exports = NewFECustomer;