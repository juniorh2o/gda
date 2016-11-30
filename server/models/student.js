module.exports = function(sequelize, DataTypes) {

    return sequelize.define('Student', {
        name : {
            type      : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName   : 'student',
        timestamps  : false,
        defaultScope : {
            order : [['name', 'ASC']]
        },
        classMethods : {

            associate   : function(models) {
                
                models.Student.hasMany(models.StudentClass);
                models.Student.hasMany(models.Note);
            }
        }
    })
};