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
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
   }
} 

//Add TRANSACTIONS
//route POST /api/v1/transactions
//access Public
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount, category } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });

    } catch (err) {
        if (err.name == 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
              success: false,
              error: "Server Error",
            });
        }
    }
} 

//DELETE TRANSACTIONS
//route DELETE /api/v1/transactions/:id
//access Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('Delete TRANSACTIONS');
} 