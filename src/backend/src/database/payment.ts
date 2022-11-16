import { Association, BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Sequelize } from "sequelize";
import User from "./user";

export default class Payment extends Model {
    // Auto-generated
    id!: number;

    date!: Date;
    description!: string;
    amount!: number;
    percentage!: number;

    public createUser!: BelongsToCreateAssociationMixin<User>;
    public getUser!: BelongsToGetAssociationMixin<User>;
    public setUser!: BelongsToSetAssociationMixin<User, number>;

    public readonly User!: User;

    public static associations: {
        User: Association<Payment, User>;
    }

    public static initialize(sequelize: Sequelize) {
        this.init({
            description: DataTypes.STRING,
            amount: DataTypes.NUMBER,
            percentage: DataTypes.DECIMAL,
            date: DataTypes.DATEONLY,
        }, { sequelize })
    }
}
