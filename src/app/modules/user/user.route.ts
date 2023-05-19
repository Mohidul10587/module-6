import express from 'express'
import { createUser, getUser, getUserById } from './user.controller';
const router = express.Router();
router.get('/', getUser)
router.get('/getUser/:id', getUserById)
router.post('/create-user', createUser)

export default router;