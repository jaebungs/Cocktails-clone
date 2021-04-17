import express from 'express';

const router = express.Router();
// routes for '/mybar'

router.post('/', addToMyBar);
router.delete('/', removeFromMyBar);

export default router;