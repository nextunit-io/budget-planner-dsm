import { DataTypes, Model, Sequelize } from "sequelize";

export default class Income extends Model {
    // Auto-generated
    id!: number;

    date!: Date;
    description!: string;
    amount!: number;
    percentage!: number;

    public static initialize(sequelize: Sequelize) {
        this.init({
            description: DataTypes.STRING,
            amount: DataTypes.NUMBER,
            percentage: DataTypes.DECIMAL,
            date: DataTypes.DATEONLY,
        }, { sequelize })
    }
}
