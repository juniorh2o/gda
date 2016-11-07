module.exports = function (conn, Sequelize) {
    var obj = conn.define('Student', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'student',
        timestamps: false,
        associate: function (models) {
            obj.belongsToMany(models.Student, {
                as: 'StudentClass',
                through: 'student_class',
                timestamps: false
            });

            obj.hasMany(models.Note);
        }
    });
    return obj;
};