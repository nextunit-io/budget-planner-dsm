import { Request, Router } from "express";
import controller from '../controllers/payment';

const router = Router();

router.route('/')
    .get((req, res, next) => {
        controller.getPayments().then(payments => {
            res.status(200).send(payments);
        }).finally(next);;
    })
    .post((req, res, next) => {
        controller.createPayment(req.body).then((payment) => {
            res.status(201).location(`${req.baseUrl}/${payment.id}`);
        }).finally(next);
    });

router.route('/:id(\\d+)')
    .get((req: Request<{ id: number }>, res, next) => {
        controller.deletePayment(req.params.id)
            .then((payment) => {
                res.status(200).send(payment);
            })
            .catch(() => res.status(404))
            .finally(next);
    })
    .delete((req: Request<{ id: number }>, res, next) => {
        controller.deletePayment(req.params.id)
            .then((payment) => {
                res.status(200).send(payment);
            })
            .catch(() => res.status(404))
            .finally(next);
    });

export default router;