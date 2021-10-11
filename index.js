import express from 'express';
import cors from 'cors';
import usersRouter from './routes/usersRouter.js';
import laundriesRouter from './routes/laundriesRouter.js';
import transactionsRouter from './routes/transactionRouter.js';
import locationsRouter from './routes/locationRouter.js';
import db from './models/index.js';
import swaggerUi from 'swagger-ui-express';
import {swaggerDocument} from './swagger/swagger-document.js';
import {ValidationError} from 'express-json-validator-middleware';
import healthcheck from 'express-healthcheck';
import basicAuth from 'express-basic-auth';
import {createUser, login} from './controllers/users.js';

const port = 5000;
const app = express();

const validationErrorMiddleware = (error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  const isValidationError = error instanceof ValidationError;
  if (!isValidationError) {
    return next(error);
  }
  const allError = error.validationErrors.body.map((error) =>
  error['dataPath'] ?
    `${error.dataPath.substr(1)} ${error.message}` : `${error.message}`);
  response.status(400).json({
    errors: allError,
    created: new Date(),
  });
  next();
};

const getUnauthorizedResponse = (req) => {
  return req.auth ?
      ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected') :
      'Restricted Area';
};

const isUserAuthenticated = (username, password, cb) => {
  if (username == 'admin' & password == 'secret') {
    return cb(null, true);
  } else {
    return cb(null, false);
  }
};

app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.get('/', function(req, res) {
  res.send('hello world!');
});
app.use('/health', healthcheck({
  healthy: function() {
    return {everything: 'is ok'};
  },
}));

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument),
);

// app.use(basicAuth({
//   authorizer: isUserAuthenticated,
//   authorizeAsync: true,
//   unauthorizedResponse: getUnauthorizedResponse,
// }));
app.post('/register', createUser);
app.post('/login', login);
app.use('/users', usersRouter);
app.use('/laundries', laundriesRouter);
app.use('/transactions', transactionsRouter);
app.use('/locations', locationsRouter);

app.use(validationErrorMiddleware);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
db.sequelize.sync({alter: true});
