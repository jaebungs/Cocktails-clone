import express from 'express';
import * as myBarController from '../controller/myBar';

const router = express.Router();

router.get('/', myBarController.getMyBarList);
// router.put('/add', myBarController.addToMyBarById);
// router.put('/remove', myBarController.removeFromMyBarById);

export default router;
