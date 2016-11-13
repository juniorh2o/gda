module.exports = function (conn, Sequelize) {
    var obj = conn.define('Note', {
        note: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    }, {
        tableName: 'note',
        timestamps: false,
        associate: function (models) {
            obj.belongsTo(models.Student);
            obj.belongsTo(models.Test);
        }
    });
    return obj;
};