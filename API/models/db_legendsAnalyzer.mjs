const legendsAnalyzerModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_user",
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    )
}

export { legendsAnalyzerModel }