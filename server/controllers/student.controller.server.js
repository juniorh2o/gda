var db = require("./../connection");

exports.getStudent = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.createStudent = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.deleteStudent = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.editStudent = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};