import { Payment } from "../database";
import { Entry } from '../../../models/entry';

async function getPayments(): Promise<Payment[]> {
    return await Payment.findAll();
}

async function createPayment(entry: Entry): Promise<Payment> {
    return await Payment.create({
        ...entry,
    });
}

async function getPayment(id: number): Promise<Payment> {
    const payment = await Payment.findByPk(id);
    if (!payment) {
        throw new Error('404');
    }

    return payment;
}

async function deletePayment(id: number): Promise<Payment> {
    const payment = await getPayment(id);
    await payment.destroy();
    return payment;
}

export default {
    createPayment,
    getPayment,
    getPayments,
    deletePayment,
}