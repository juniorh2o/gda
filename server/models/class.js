module.exports = function (conn, Sequelize) {
    var obj = conn.define('Class', {
        name: {
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

            obj.belongsToMany(models.Student, {
                as: 'StudentClass',
                through: 'student_class',
                timestamps: false
            });

            obj.hasMany(models.Test);
        }
    });
    return obj;
};