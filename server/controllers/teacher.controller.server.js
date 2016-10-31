var db = require("./../connection");

exports.getTeacher = function (req, res) {
    db.Teacher.findAll({
        include: [{model: db.Test}]
    }).then(function (data) {
        return res.status(200).json({success: true, data: data});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.createTeacher = function (req, res) {
    db.Teacher.create({name: req.body.name, DisciplineId: req.body.DisciplineId}).then(function (obj) {
        if (obj)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteTeacher = function (req, res) {
    db.Teacher.destroy({
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

exports.editTeacher = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};