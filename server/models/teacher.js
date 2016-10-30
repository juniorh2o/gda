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
            obj.belongsTo(models.Discipline);
            obj.hasMany(models.Test);
        }
    });
    return obj;
};