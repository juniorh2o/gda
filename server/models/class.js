module.exports = function (conn, Sequelize) {
    var obj = conn.define('Class', {
        abrev: {
            type: Sequelize.STRING,
            allowNull: false
        },
        level: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'class',
        timestamps: false,
        associate: function (models) {
            obj.belongsTo(models.Discipline);
            obj.belongsTo(models.Teacher);

            obj.hasMany(models.StudentClass);

            obj.hasMany(models.Test);
        }
    });
    return obj;
};