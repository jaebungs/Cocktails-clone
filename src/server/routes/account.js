import express from 'express';
import * as accountController from '../controller/account';

const router = express.Router();

router.get('/', accountController.getAccountByEmail);
router.post('/', accountController.createAccount);
router.put('/:id', accountController.updateAccountById);
router.delete('/:id', accountController.deleteAccountById);

export default router;
