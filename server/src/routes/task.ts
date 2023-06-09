import {Router} from 'express';
import { getTask } from '../controllers/task';
import validateToken from './validateToken';

const router = Router();

router.get('/',validateToken, getTask)

export default router;