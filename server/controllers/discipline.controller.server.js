var db = require("./../connection");

exports.getDiscipline = function (req, res) {
    db.Discipline.findAll({
        include: [{model: db.Teacher}]
    }).then(function (data) {
        return res.status(200).json({success: true, data: data});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.createDiscipline = function (req, res) {
    db.Discipline.create({name: req.body.name}).then(function (obj) {
        if (obj)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteDiscipline = function (req, res) {
    db.Discipline.destroy({
        where: {id: req.body.id}
    }).then(function (rowaffected) {
        if (rowaffected)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object deleted"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.editDiscipline = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};