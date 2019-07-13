import express from 'express';
import User from '../../controllers/users';

const router = express.Router();

// create instance for the user class
const user = new User();

router.post('/register', user.signup);

router.post('/login', user.login);

export default router;
