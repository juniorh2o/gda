module.exports = function(sequelize, DataTypes) {

    return sequelize.define('Test', {
        name : {
            type      : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName    : 'test',
        timestamps   : false,
        defaultScope : {

            order : [['name', 'ASC']]
        },
        classMethods : {

            associate : function(models) {

                models.Test.hasMany(models.Note);
                models.Test.belongsTo(models.Class);
            }
        }
    })
};