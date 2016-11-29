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
            obj.hasMany(models.StudentClass);

            obj.hasMany(models.Note);
        }
    });
    return obj;
};