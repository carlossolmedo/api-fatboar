import { Router } from 'express';
import { userRoute } from './routes';
import userController from '../controllers/user.controller';

const router = Router();

router.get(userRoute.getUsers, userController.getUsers);
router.get(userRoute.getUser, userController.getUser);
router.get(userRoute.getUserById, userController.getUserById);
router.get(userRoute.getTicketsByUser, userController.getTicketsByUser);
router.put(userRoute.updateUser, userController.updateUser);
router.delete(userRoute.deleteUser, userController.deleteUser);
router.get(userRoute.getNumberUsersCustomer, userController.getNumberUsersCustomer);
router.get(userRoute.getUsersAdmin, userController.getUsersAdmin);
router.get(userRoute.getUsersCustomer, userController.getUsersCustomer);
router.get(userRoute.getUserBigPrize, userController.getUserBigPrize);
// router.post(`/users/searchEmail`, userController.getUserByEmail);

module.exports = router;
