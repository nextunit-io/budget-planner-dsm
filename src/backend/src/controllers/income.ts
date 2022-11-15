import { Income } from "../database";

async function getIncomes(): Promise<Income[]> {
    return await Income.findAll();
}

export default {
    getIncomes,
}