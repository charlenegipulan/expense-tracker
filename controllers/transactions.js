const Transaction = require('../models/Transaction');

//GET ALL TRANSACTIONS
//route GET /api/v1/transactions
//access Public
exports.getTransactions = async (req, res, next) => {
   try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            succes: true,
            count: transactions.length,
            data: transactions
        });
   } catch {
        res.send(500).json({
            success: false,
            error: 'Server Error'
        });
   }
} 

//Add TRANSACTIONS
//route POST /api/v1/transactions
//access Public
exports.addTransaction = async (req, res, next) => {
    res.send('POST TRANSACTIONS');
} 

//DELETE TRANSACTIONS
//route DELETE /api/v1/transactions/:id
//access Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('Delete TRANSACTIONS');
} 