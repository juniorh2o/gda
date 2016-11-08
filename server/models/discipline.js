module.exports = function (conn, Sequelize) {
    var obj = conn.define('Discipline', {
        abrev: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'discipline',
        timestamps: false,
        associate: function (models) {
            obj.hasMany(models.Class);
        }
    });
    return obj;
};