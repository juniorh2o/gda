var db = require("./../connection");

exports.getGraphList = function (req, res) {
    var response = {};
    db.Discipline.findAll({raw:true}).then(function (data) {
        response.Discipline = data;
        db.Teacher.findAll({raw:true}).then(function (data) {
            response.Teacher = data;
            db.Student.findAll({raw:true}).then(function (data) {
                response.Student = data;
                db.Class.findAll({raw:true}).then(function (data) {
                    response.Class = data;
                    db.Test.findAll({raw:true}).then(function (data) {
                        response.Test = data;
                        return res.status(200).jsonp(response);
                    }).catch(function (err) {
                        console.log(err);
                        return res.status(400).json({success: false, err: err});
                    });
                }).catch(function (err) {
                    console.log(err);
                    return res.status(400).json({success: false, err: err});
                });
            }).catch(function (err) {
                console.log(err);
                return res.status(400).json({success: false, err: err});
            });
        }).catch(function (err) {
            console.log(err);
            return res.status(400).json({success: false, err: err});
        });
    }).catch(function (err) {
        console.log(err);
        return res.status(400).json({success: false, err: err});
    });
};