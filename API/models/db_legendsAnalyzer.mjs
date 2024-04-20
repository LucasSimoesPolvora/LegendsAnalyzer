const userModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_user",
        {
            id_user: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                validate: {
                    notNull:{
                        msg:"The username is required"
                    },
                    len:{
                        args:[3, 100],
                        msg:"The username length doesn't match the requirements"
                    },

                },
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: {
                        msg:"The email isn't valid"
                    },
                    notNull:{
                        msg:"The email is required"
                    },
                },
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args:[10, 1000],
                        msg: "The password length doesn't match the requirements"
                    },
                    notNull:{
                        msg:"The password is required"
                    },
                }
            }
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false
        }
    )
}

export { userModel }