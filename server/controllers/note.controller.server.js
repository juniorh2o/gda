var db = require("./../connection");

exports.getNotes = function (req, res) {
    db.Note.findAll({where: {TestId: req.params.TestId}, include: [db.Student]}).then(function (data) {
        if (!data) {
            return res.jsonp({
                success: false,
                message: "NO_USERS_FOUND"
            });
        } else {
            return res.jsonp({
                results: data
            });
        }
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};