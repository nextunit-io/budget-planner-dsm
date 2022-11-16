import { Income } from "../database";
import { Entry } from '../../../models/entry';

async function getIncomes(): Promise<Income[]> {
    return await Income.findAll();
}

async function createIncome(entry: Entry): Promise<Income> {
    return await Income.create({
        ...entry,
    });
}

async function getIncome(id: number): Promise<Income> {
    const income = await Income.findByPk(id);
    if (!income) {
        throw new Error('404');
    }

    return income;
}

async function deleteIncome(id: number): Promise<Income> {
    const income = await getIncome(id);
    await income.destroy();
    return income;
}

export default {
    createIncome,
    getIncome,
    getIncomes,
    deleteIncome,
}