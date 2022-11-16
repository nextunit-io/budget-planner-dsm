import { Request, Router } from "express";
import controller from '../controllers/user';

const router = Router();

router.route('/')
    .get((req, res, next) => {
        controller.getUsers().then(users => {
            if (users.length !== 0) {
                res.status(200).send(users);
            } else {
                res.status(404);
            }
        }).finally(next);
    })

export default router;