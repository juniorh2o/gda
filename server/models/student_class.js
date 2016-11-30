module.exports = function(sequelize, DataTypes) {

    return sequelize.define('StudentClass', {}, {
        tableName   : 'student_class',
        timestamps  : false,
        associate   : function(models) {

            models.StudentClass.belongsTo(models.Class);
            models.StudentClass.belongsTo(models.Student);
        }
    })
};