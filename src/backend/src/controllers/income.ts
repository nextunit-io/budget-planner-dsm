import { Income, User } from "../database";
import { Entry } from '../../../models/entry';

async function getIncomes(userId: number): Promise<Income[]> {
    return await Income.findAll({
        where: { UserId: userId },
    });
}

async function createIncome(userId: number, entry: Entry): Promise<Income> {
    const user = await User.findByPk(userId);
    const income = await Income.create({
        ...entry,
    });
    await user.addIncome(income);
    return income;
}

async function getIncome(userId: number, id: number): Promise<Income> {
    const income = await Income.findByPk(id);
    if (!income || (await income.getUser()).id !== userId) {
        throw new Error('404');
    }

    return income;
}

async function deleteIncome(userId: number, id: number): Promise<Income> {
    const income = await getIncome(userId, id);
    await income.destroy();
    return income;
}

export default {
    createIncome,
    getIncome,
    getIncomes,
    deleteIncome,
}