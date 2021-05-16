import express from 'express';
import * as accountController from '../controller/account';

const router = express.Router();

router.post('/', accountController.getAccountByEmail);
router.post('/createAccount', accountController.createAccount);
router.put('/:id', accountController.updateAccountById);
router.delete('/:id', accountController.deleteAccountById);

export default router;
