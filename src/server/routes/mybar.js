import express from 'express';
import { authToken } from '../middleware/authToken';
import * as mybarController from '../controller/mybar';

const router = express.Router();

router.get('/', authToken, mybarController.getMyBarFromAccount);
router.put('/update', authToken, mybarController.updateMyBar);

export default router;
