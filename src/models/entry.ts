export interface Entry {
    date: Date,
    description: string,
    amount: number,
    percentage: number,
}

export default function generateEntry(): Entry {
    return {
        date: new Date(),
        description: '',
        amount: 0,
        percentage: 100,
    }
}