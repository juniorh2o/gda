module.exports = function(sequelize, DataTypes) {

    return sequelize.define('Note', {
        note : {
            type      : DataTypes.FLOAT,
            allowNull : false
        }
    }, {
        tableName   : 'note',
        timestamps  : false,
        associate   : function(models) {

            models.Note.belongsTo(models.Student);
            models.Note.belongsTo(models.Test);
        }
    })
};