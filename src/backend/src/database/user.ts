import { Association, BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCountAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, Model, Sequelize } from "sequelize";
import Income from "./income";
import Payment from "./payment";

export default class User extends Model {
    // Auto-generated
    id!: number;

    firstname!: string;
    lastname!: string;
    createdAt!: Date;
    active!: boolean;

    public addIncome!: BelongsToManyAddAssociationMixin<Income, number>;
    public addIncomes!: BelongsToManyAddAssociationsMixin<Income, number>;
    public countIncomes!: BelongsToManyCountAssociationsMixin;
    public createIncome!: BelongsToManyCreateAssociationMixin<Income>;
    public getIncomes!: BelongsToManyGetAssociationsMixin<Income>;
    public hasIncome!: BelongsToManyHasAssociationMixin<Income, number>;
    public hasIncomes!: BelongsToManyHasAssociationsMixin<Income, number>;
    public removeIncome!: BelongsToManyRemoveAssociationMixin<Income, number>;
    public removeIncomes!: BelongsToManyRemoveAssociationsMixin<Income, number>;
    public setIncomes!: BelongsToManySetAssociationsMixin<Income, number>;

    public readonly Incomes?: Income[];

    public addPayment!: BelongsToManyAddAssociationMixin<Payment, number>;
    public addPayments!: BelongsToManyAddAssociationsMixin<Payment, number>;
    public countPayments!: BelongsToManyCountAssociationsMixin;
    public createPayment!: BelongsToManyCreateAssociationMixin<Payment>;
    public getPayments!: BelongsToManyGetAssociationsMixin<Payment>;
    public hasPayment!: BelongsToManyHasAssociationMixin<Payment, number>;
    public hasPayments!: BelongsToManyHasAssociationsMixin<Payment, number>;
    public removePayment!: BelongsToManyRemoveAssociationMixin<Payment, number>;
    public removePayments!: BelongsToManyRemoveAssociationsMixin<Payment, number>;
    public setPayments!: BelongsToManySetAssociationsMixin<Payment, number>;

    public readonly Payments?: Payment[];

    public static associations: {
        Incomes: Association<User, Income>
        Payments: Association<User, Payment>
    };

    public static initialize(sequelize: Sequelize) {
        this.init({
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            active: DataTypes.BOOLEAN,
        }, { sequelize })
    }
}
