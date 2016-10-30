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
            obj.hasMany(models.Student);
            obj.hasMany(models.Test);
        }
    });
    return obj;
};