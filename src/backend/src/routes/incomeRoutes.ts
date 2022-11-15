import { Router } from "express";
import controller from '../controllers/income';

const router = Router();

router.route('/')
    .get((req, res, next) => {
        controller.getIncomes().then(incomes => {
            if (incomes.length > 0) {
                res.status(200).send(incomes);
            } else {
                res.status(404);
            }

        }).finally(next);;
    });

export default router;