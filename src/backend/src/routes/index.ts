import express, { Router } from 'express';
import incomeRoutes from './incomeRoutes';
import paymentRoutes from './paymentRoutes';

const router = Router()

router.use(express.static('../frontend/dist'));
router.use('/incomes', incomeRoutes)
router.use('/payments', paymentRoutes)

export default router;