import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.get(`/users`, userController.getUsers);
router.get(`/users/:id`, userController.getUserById);
router.post(`/users`, userController.addUser);
router.post(`/users/searchEmail`, userController.getUserByEmail);
router.put(`/users/:id`, userController.updateUser);
router.delete(`/users/:id`, userController.deleteUser);

module.exports = router;
