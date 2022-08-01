import { Router } from 'express';
import ExpressRoutesAdapter from '../adapters/express-routes.adapter';
import GetAllUserController from '../controllers/user.controller';

const router = Router()
const controller = new GetAllUserController()

router.get('/', ExpressRoutesAdapter.adapt(controller));

export default router;