import express, { Router } from 'express';
import incomeRoutes from './incomeRoutes';
import paymentRoutes from './paymentRoutes';
import userRoutes from './userRoutes';

const router = Router()

router.use(express.static('../frontend/dist'));
router.use('/users/:userId(\\d+)/incomes', incomeRoutes)
router.use('/users/:userId(\\d+)/payments', paymentRoutes)
router.use('/users', userRoutes)

export default router;