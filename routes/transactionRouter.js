import {Router} from 'express';

import {
  getTransactionByLaundryId,
  getTransactionById,
  createTransaction,
  updateTransactionById,
  deleteTransactionById,
} from '../controllers/transactions.js';


import {transaction as transactionSchema} from '../models/transaction.js';
import {Validator} from 'express-json-validator-middleware';

const transactionsRouter = new Router();
const {validate} = new Validator({allErrors: true});
transactionsRouter.get('/', function(req, res) {
  res.send('hellow');
});
transactionsRouter.get('/laundry/:id_laundry', getTransactionByLaundryId);
transactionsRouter.get('/:id_transaction', getTransactionById);
transactionsRouter.post('/',
    validate({body: transactionSchema}),
    createTransaction);
transactionsRouter.put('/:id_transaction', updateTransactionById);
transactionsRouter.delete('/:id_transaction', deleteTransactionById);

export default transactionsRouter;
