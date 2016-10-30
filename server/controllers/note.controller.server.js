var db = require("./../connection");

exports.getNote = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.createNote = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.deleteNote = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};

exports.editNote = function (req, res) {
    //return res.status(400).json({success: false, err: err});
    return res.status(200).json({success: true});
};