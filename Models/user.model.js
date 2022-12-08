import { sequelize } from "../Config/sequelize.config.js";
import { DataTypes, Model } from "sequelize";

class UserModel extends Model {}

UserModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		sequelize,
		modelName: "user",
		freezeTableName: true,
		underscored: true,
		hooks: {
			beforeCreate: async (user, options) => {
				user.password = await createHash(user.password);
			},
			beforeUpdate: async (user, options) => {
				user.password = await createHash(user.password);
			},
		},
		//createdAt: false,
		//updatedAt: false
	}
);

export default UserModel;
