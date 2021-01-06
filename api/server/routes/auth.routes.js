import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

router.post(`/auth/signup`, authController.signup);
router.post(`/auth/login`, authController.login);
router.post(`/auth/google`, authController.google);
router.post(`/auth/facebook`, authController.facebook);

module.exports = router;

