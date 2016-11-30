module.exports = function (conn, Sequelize) {
    var obj = conn.define('Teacher', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'teacher',
        timestamps: false,
        associate: function (models) {
            obj.hasMany(models.Class);
        }
    });
    return obj;
};