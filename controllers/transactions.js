//GET ALL TRANSACTIONS
//route GET /api/v1/transactions
//access Public
exports.getTransactions = (req, res, next) => {
    res.send('GET TRANSACTIONS');
} 

//Add TRANSACTIONS
//route POST /api/v1/transactions
//access Public
exports.addTransaction = (req, res, next) => {
    res.send('POST TRANSACTIONS');
} 

//DELETE TRANSACTIONS
//route DELETE /api/v1/transactions/:id
//access Public
exports.deleteTransaction = (req, res, next) => {
    res.send('Delete TRANSACTIONS');
} 