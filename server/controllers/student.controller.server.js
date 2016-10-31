var db = require("./../connection");

exports.getStudent = function (req, res) {
    db.Student.findAll({
        include: [{model: db.Note}]
    }).then(function (data) {
        return res.status(200).json({success: true, data: data});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.createStudent = function (req, res) {
    db.Student.create({name: req.body.name, ClassId: req.body.ClassId}).then(function (obj) {
        if (obj)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteStudent = function (req, res) {
    db.Student.destroy({
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

exports.editStudent = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};