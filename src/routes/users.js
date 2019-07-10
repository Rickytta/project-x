import express from 'express';
import User from '../controllers/users';

const router = express.Router();

router.post('/signup', User.signup);
router.post('/login', User.login);

export default router;
