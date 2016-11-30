module.exports = function(sequelize, DataTypes) {

    return sequelize.define('Class', {
        abrev : {
            type      : DataTypes.STRING,
            allowNull : false
        },
        level : {
            type      : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName    : 'class',
        timestamps   : false,
        defaultScope : {
            order : [['abrev', 'ASC']]
        },
        classMethods : {

            associate : function(models) {

                models.Class.belongsTo(models.Discipline);
                models.Class.belongsTo(models.Teacher);

                models.Class.hasMany(models.StudentClass);
                models.Class.hasMany(models.Test);
            }
        }
    })
};