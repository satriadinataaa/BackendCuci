import db from '../models/index.js';
import jsonwebtoken from 'jsonwebtoken';
import crypto from 'crypto';
const Users = db.users;

export const getAllUsers = async (req, res) => {
  let limit;
  let offset = 0;
  let search = '';
  if (req.query.limit) {
    limit = parseInt(req.query.limit);
  }
  if (req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query.search) {
    search = req.query.search;
  }
  try {
    Users.findAndCountAll({
      limit: limit,
      offset: offset,
      where: {
        name: {
          [db.op.like]: '%'+search+'%',
        },
      },
      include: [
        {
          model: db.laundries,
        }, {
          model: db.roles,
        },
      ]})

        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message ||
            'Some error occurred while retrieving users.',
          });
        });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const createUser = async (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  const user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    role_id: req.body.role_id,
  };

  Users.create(user)
      .then((data) => {
        const token = jsonwebtoken.sign({email: user.email}, 'cuciin', {expiresIn: '1800s'});


        res.send({message: `user ${user.email} created!`,
          detailUser: user,
          token: token});
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message ||
          'Some error occurred while creating the user.',
        });
      });
};

export const getUserById = async (req, res) => {
  try {
    Users.findByPk(req.params.id_user)
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message ||
            'Some error occurred while retrieving user.',
          });
        });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getUserByName = async (req, res) => {
  try {
    Users.findAll({
      where: {
        name: {
          [db.op.like]: '%'+req.query.name+'%',
        },
      },
    })
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message ||
              'Some error occurred while retrieving user.',
          });
        });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    Users.destroy({
      where: {
        id_user: req.params.id_user,
      },
    });
    res.status(200).send({
      message: 'data deleted',
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const updateUserById = async (req, res) => {
  try {
    await Users.update(req.body, {
      where: {
        id_user: req.params.id_user,
      },
    });
    res.status(200).send({
      message: 'data updated',
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
};
