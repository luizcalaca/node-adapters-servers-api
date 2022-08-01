import { Router } from 'express';
import GetAllUserController from '../controllers/user.controller';

const router = Router()
const controller = new GetAllUserController()

router.get('/', controller.handle);

export default router;