import {Router} from 'express';
import {
  getAllUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
  getUserByName,
} from '../controllers/users.js';


import {user as userSchema} from '../models/user.js';
import {Validator} from 'express-json-validator-middleware';

const usersRouter = new Router();
const {validate} = new Validator({allErrors: true});
usersRouter.get('/', getAllUsers);
usersRouter.get('/id/:id_user', getUserById);
usersRouter.get('/name', getUserByName);
usersRouter.post('/', validate({body: userSchema}), createUser);
usersRouter.delete('/:id_user', deleteUserById);
usersRouter.put('/:id_user', updateUserById);

export default usersRouter;
