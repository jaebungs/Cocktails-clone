import express from 'express';
import * as accountService from '../controller/account';

const router = express.Router();

router.get('/', accountService.getAccountByEmail);
router.post('/', accountService.createAccount);
router.put('/:id', accountService.updateAccountById);
router.delete('/:id', accountService.deleteAccountById);

export default router;
