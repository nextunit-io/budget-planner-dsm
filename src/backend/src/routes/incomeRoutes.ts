import { Request, Router } from "express";
import controller from '../controllers/income';

const router = Router();

router.route('/')
    .get((req: Request<{ userId: number }>, res, next) => {
        controller.getIncomes(req.params.userId).then(incomes => {
            res.status(200).send(incomes);
        }).finally(next);
    })
    .post((req: Request<{ userId: number }>, res, next) => {
        controller.createIncome(req.params.userId, req.body).then((income) => {
            res.status(201).location(`${req.baseUrl}/${income.id}`);
        }).finally(next);
    });

router.route('/:id(\\d+)')
    .get((req: Request<{ userId: number, id: number }>, res, next) => {
        controller.deleteIncome(req.params.userId, req.params.id)
            .then((income) => {
                res.status(200).send(income);
            })
            .catch(() => res.status(404))
            .finally(next);
    })
    .delete((req: Request<{ userId: number, id: number }>, res, next) => {
        controller.deleteIncome(req.params.userId, req.params.id)
            .then((income) => {
                res.status(200).send(income);
            })
            .catch(() => res.status(404))
            .finally(next);
    });

export default router;