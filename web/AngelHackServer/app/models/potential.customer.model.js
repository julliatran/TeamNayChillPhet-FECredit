const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    fullname: String,
    SSID: String,
    income: String,
    email: String,
    age: Number,
    isMale: Boolean,
    phoneNumber: String,
    workingAddress: String,
    workingLocation: Object,
    suggestCustomerNeed: Array,
    career: String,
    homeAddress: String,
    homeLocation: Object,
    socialNetwork: Object,
    feCredit: Object
}, { timestamps: true });

const PotentialCustomer = mongoose.model('PotentialCustomer', customerSchema);

module.exports = PotentialCustomer;