module.exports = function (conn, Sequelize) {
    var obj = conn.define('Discipline', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'discipline',
        timestamps: false,
        associate: function (models) {
            obj.hasMany(models.Teacher);
        }
    });
    return obj;
};