import db from '../models/index.js';
const Transactions = db.transactions;

export const getTransactionById = async (req, res) => {
  try {
    Transactions.findByPk(req.params.id_transaction)
        .then((data) => {
          res.status(200).send(data);
        }).catch((err) => {
          res.status(500).send({
            message: err.message ||
            'Some error occurred while retrieving Transaction.',
          });
        });
  } catch (error) {
    res.status(400).json(error.message);
  };
};

export const getTransactionByLaundryId = async (req, res) => {
  try {
    Transactions.findAll({
      where: {laundry_id: req.params.id_laundry},
    }).then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message ||
        'Some error occurred while retrieving Transaction.',
      });
    });
  } catch (error) {
    res.status(400).json(error.message);
  };
};

export const createTransaction = async (req, res) => {
  if (!req.body.user_id && !req.body.laundry_id) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  const transaction = {
    user_id: req.body.user_id,
    laundry_id: req.body.laundry_id,
    laundry_status_id: req.body.laundry_status_id,
    total_price: req.body.total_price,
    payment_status: req.body.payment_status,
    payment_link: req.body.payment_link,
  };

  Transactions.create(transaction)
      .then((data) => {
        res.send({message: `transaction created!`});
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message ||
          'Some error occurred while creating the user.',
        });
      });
};

export const updateTransactionById = async (req, res) => {
  try {
    await Transactions.update(req.body, {
      where: {
        id_transaction: req.params.id_transaction,
      },
    });
    res.status(200).send({
      message: 'data updated',
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export const deleteTransactionById = async (req, res) => {
  try {
    Transactions.destroy({
      where: {
        id_transaction: req.params.id_transaction,
      },
    });
    res.status(200).send({
      message: 'data deleted',
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
