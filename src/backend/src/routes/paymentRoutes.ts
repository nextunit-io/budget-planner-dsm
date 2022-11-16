import { Request, Router } from "express";
import controller from '../controllers/payment';

const router = Router();

router.route('/')
    .get((req: Request<{ userId: number }>, res, next) => {
        controller.getPayments(req.params.userId).then(payments => {
            res.status(200).send(payments);
        }).finally(next);;
    })
    .post((req: Request<{ userId: number }>, res, next) => {
        controller.createPayment(req.params.userId, req.body).then((payment) => {
            res.status(201).location(`${req.baseUrl}/${payment.id}`);
        }).finally(next);
    });

router.route('/:id(\\d+)')
    .get((req: Request<{ userId: number, id: number }>, res, next) => {
        controller.deletePayment(req.params.userId, req.params.id)
            .then((payment) => {
                res.status(200).send(payment);
            })
            .catch(() => res.status(404))
            .finally(next);
    })
    .delete((req: Request<{ userId: number, id: number }>, res, next) => {
        controller.deletePayment(req.params.userId, req.params.id)
            .then((payment) => {
                res.status(200).send(payment);
            })
            .catch(() => res.status(404))
            .finally(next);
    });

export default router;