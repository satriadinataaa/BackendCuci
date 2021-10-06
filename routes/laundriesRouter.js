import {Router} from 'express';

import {
  getAllLaundries,
  createLaundry,
  getLaundryById,
  deleteLaundryById,
  updateLaundryById,
} from '../controllers/laundries.js';


import {laundry as laundrySchema} from '../models/laundry.js';
import {Validator} from 'express-json-validator-middleware';

const laundriesRouter = new Router();
const {validate} = new Validator({allErrors: true});

laundriesRouter.get('/', getAllLaundries);
laundriesRouter.get('/:id_laundry', getLaundryById);
laundriesRouter.post('/', validate({body: laundrySchema}), createLaundry);
laundriesRouter.delete('/:id_laundry', deleteLaundryById);
laundriesRouter.put('/:id_laundry', updateLaundryById);

export default laundriesRouter;
