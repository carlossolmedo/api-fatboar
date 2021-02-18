import { Router } from 'express';
import { authRoute } from './routes';
import authController from '../controllers/auth.controller';

const router = Router();

router.post(authRoute.signup, authController.signup);
router.post(authRoute.login, authController.login);
router.post(authRoute.logout, authController.logout);
router.post(authRoute.google, authController.google);
router.post(authRoute.facebook, authController.facebook);

module.exports = router;
