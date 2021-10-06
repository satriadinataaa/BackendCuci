import {Router} from 'express';

import {
  getNearbyLaundry,
} from '../controllers/locations.js';

const locationRouter = new Router();

locationRouter.get('/nearby', getNearbyLaundry);

export default locationRouter;
