import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controller/users';
import { createProperty, getAllProperties, getPropertyById, getPropertyByType, deletePropertyById } from '../controller/property';
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:Id', getUserById);
router.post('/user', createUser);

// router.post("/user/login", signinUser)

router.get('/properties', getAllProperties);
router.get('/properties/:Id', getPropertyById);
router.get('/properties/type/:type', getPropertyByType);
router.post('/property', createProperty);
router.delete('/propertydel/:Id', deletePropertyById);


export default router;