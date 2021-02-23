import { Router } from 'express';
import { userRoute } from './routes';
import userController from '../controllers/user.controller';

const router = Router();

router.get(userRoute.getUsers, userController.getUsers);
router.get(userRoute.getUser, userController.getUser);
router.get(userRoute.getUserById, userController.getUserById);
router.post(userRoute.addUser, userController.addUser);
router.put(userRoute.updateUser, userController.updateUser);
router.delete(userRoute.deleteUser, userController.deleteUser);
// router.post(`/users/searchEmail`, userController.getUserByEmail);

module.exports = router;
