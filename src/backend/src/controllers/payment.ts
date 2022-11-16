import { Payment, User } from "../database";
import { Entry } from '../../../models/entry';

async function getPayments(userId: number): Promise<Payment[]> {
    return await Payment.findAll({
        where: { UserId: userId },
    });
}

async function createPayment(userId: number, entry: Entry): Promise<Payment> {
    const user = await User.findByPk(userId);
    const payment = await Payment.create({
        ...entry,
    });
    await user.addPayment(payment);
    return payment;
}

async function getPayment(userId: number, id: number): Promise<Payment> {
    const payment = await Payment.findByPk(id);
    if (!payment || (await payment.getUser()).id !== userId) {
        throw new Error('404');
    }

    return payment;
}

async function deletePayment(userId: number, id: number): Promise<Payment> {
    const payment = await getPayment(userId, id);
    await payment.destroy();
    return payment;
}

export default {
    createPayment,
    getPayment,
    getPayments,
    deletePayment,
}