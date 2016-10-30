var db = require("./../connection");

exports.getTeacher = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.createTeacher = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.deleteTeacher = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.editTeacher = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};