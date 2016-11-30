module.exports = function(sequelize, DataTypes) {

    return sequelize.define('Discipline', {
        abrev : {
            type      : DataTypes.STRING,
            allowNull : false
        },
        name : {
            type      : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName   : 'discipline',
        timestamps  : false,
        defaultScope : {
            order : [['abrev', 'ASC']]
        },
        classMethods : {

            associate : function(models) {

                models.Discipline.hasMany(models.Class)
            }
        }
    })
};