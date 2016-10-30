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
            obj.belongsTo(models.Class);
            obj.hasMany(models.Note);
        }
    });
    return obj;
};