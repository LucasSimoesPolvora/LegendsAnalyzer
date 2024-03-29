const userModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_user",
        {
            id_user: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nickname: {
                type: DataTypes.STRING,
                validate: {
                    notNull:{
                        msg:"The nickname is required"
                    },
                    len:{
                        args:[3, 100],
                        msg:"The nickname length doesn't match the requirements"
                    },

                },
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                },
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    min: {
                        
                    }
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