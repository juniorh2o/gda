var db = require("./../connection");

exports.getTest = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.createTest = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.deleteTest = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.editTest = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};