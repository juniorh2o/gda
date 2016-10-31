var db = require("./../connection");

exports.getTest = function (req, res) {
    db.Test.findAll({
        include: [{model: db.Note}]
    }).then(function (data) {
        return res.status(200).json({success: true, data: data});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.createTest = function (req, res) {
    db.Teacher.create({
        name: req.body.name,
        TeacherId: req.body.TeacherId,
        ClassId: req.body.ClassId
    }).then(function (obj) {
        if (obj)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteTest = function (req, res) {
    db.Test.destroy({
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

exports.editTest = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};