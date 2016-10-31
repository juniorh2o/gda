var db = require("./../connection");

exports.getNote = function (req, res) {
    db.Note.findAll({}).then(function (data) {
        return res.status(200).json({success: true, data: data});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.createNote = function (req, res) {
    db.Note.create({note: req.body.note, StudentId: req.body.StudentId, TestId: req.body.TestId}).then(function (obj) {
        if (obj)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteNote = function (req, res) {
    db.Note.destroy({
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

exports.editNote = function (req, res) {
    db.Note.find({where: {id: req.body.id}}).then(function (obj) {
        if (obj) {
            obj.note = req.body.note;

            obj.save().then(function (objSaved) {
                return res.status(200).json({success: true});
            }).catch(function (err) {
                return res.status(400).json({success: false, err: "failed to save the edited object"});
            });
        }
        else
            return res.status(400).json({success: false, err: "no object found to edit"});

    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};