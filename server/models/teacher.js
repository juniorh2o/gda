module.exports = function(sequelize, DataTypes) {

    return sequelize.define('Teacher', {
        name : {
            type      : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName   : 'teacher',
        timestamps  : false,
        defaultScope : {
            order : [['name', 'ASC']]
        },
        classMethods : {

            associate : function(models) {

                models.Teacher.hasMany(models.Class);
            }
        }
    })
};