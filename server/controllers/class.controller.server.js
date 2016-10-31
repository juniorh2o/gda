var db = require("./../connection");

exports.getClass = function (req, res) {
    db.Class.findAll({
        include: [{model: db.Student}, {model: db.Test}]
    }).then(function (data) {
        return res.status(200).json({success: true, data: data});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.createClass = function (req, res) {
    db.Class.create({name: req.body.name, level: req.body.level}).then(function (obj) {
        if (obj)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteClass = function (req, res) {
    db.Class.destroy({
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

exports.editClass = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};