module.exports = function (conn, Sequelize) {
    var obj = conn.define('StudentClass', {
    }, {
        tableName: 'student_class',
        timestamps: false,
        associate: function (models) {
            obj.belongsTo(models.Class);
            obj.belongsTo(models.Student);
        }
    });
    return obj;
};