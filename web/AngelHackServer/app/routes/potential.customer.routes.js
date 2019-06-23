module.exports = (app) => {
    const potentialCustomer = require('../controllers/potential.customer.controller.js');

    // Get User used FECredit
    app.get('/potentialcustomer/getpotentialcustomertier1', potentialCustomer.getpotentialcustomertier1);

    // Get User most match with the user who used FECredit
    app.get('/potentialcustomer/getpotentialcustomertier2', potentialCustomer.getpotentialcustomertier2);

    // Update user to used FECredit
    app.put('/potentialcustomer/updatetousedfe', potentialCustomer.updatetousedfe);
}