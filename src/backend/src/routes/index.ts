import { Router } from 'express'
import incomeRoutes from './incomeRoutes';

const router = Router()

router.use('/incomes', incomeRoutes)

export default router;