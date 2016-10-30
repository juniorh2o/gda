module.exports = function (conn, Sequelize) {
    var obj = conn.define('Test', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'test',
        timestamps: false,
        associate: function (models) {
            obj.hasMany(models.Note);
            obj.belongsTo(models.Teacher);
            obj.belongsTo(models.Class);
        }
    });
    return obj;
};