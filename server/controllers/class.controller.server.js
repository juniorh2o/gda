var db = require("./../connection");

exports.getClassAll = function (req, res) {
    var queryObj = {
        include: [db.Discipline, db.Teacher, {model: db.StudentClass, include: [db.Student]}]
    };

    db.Class.findAll(queryObj).then(function (data) {
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
        console.log(err);
        return res.status(400).json({success: false, err: err});
    });
};

exports.getClass = function (req, res) {
    var params = req.query;
    var maxResults = 10;
    var offset = params.page ? --params.page * maxResults : 0;
    var sort = params.sort ? params.sort : 'id';
    var order = params.order ? params.order : 'desc';

    var queryObj = {
        limit: maxResults,
        offset: offset,
        order: sort + " " + order + ', Class.abrev asc',
        include: [db.Discipline, db.Teacher]
    };

    if (params.filter && typeof params.filter == "string") {
        var operation = {$like: "%" + params.filter + "%"};
        if (!queryObj.where) {
            queryObj.where = {};
        }
        queryObj.where['$or'] = {
            name: operation
        };

        if (!isNaN(params.filter)) {
            queryObj.where.$or['id'] = params.filter;
        }
    }

    db.Class.findAndCountAll(queryObj).then(function (data) {
        if (!data) {
            return res.jsonp({
                success: false,
                message: "NO_USERS_FOUND"
            });
        } else {
            return res.jsonp({
                results: data.rows,
                total: data.count,
                maxResults: maxResults
            });
        }
    }).catch(function (err) {
        console.log(err);
        return res.status(400).json({success: false, err: err});
    });
};

exports.createClass = function (req, res) {
    db.Class.create({
        abrev: req.body.abrev,
        level: req.body.level,
        DisciplineId: req.body.Discipline.id,
        TeacherId: req.body.Teacher.id
    }).then(function (obj) {
        if (obj) {
            for (var x = 0; x < req.body.classStudent.length; x++)
                req.body.classStudent[x] = {StudentId: req.body.classStudent[x], ClassId: obj.id};

            db.StudentClass.bulkCreate(req.body.classStudent).then(function (rules) {
                return res.status(200).json({success: true});
            }).catch(function (err) {
                console.log(err);
                return res.status(400).json({success: false, err: err});
            });
        }
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteClass = function (req, res) {
    db.StudentClass.destroy({
        where: {ClassId: req.body.id}
    }).then(function (rowaffected) {
        db.Test.destroy({
            where: {ClassId: req.body.id}
        }).then(function (rowaffected) {
            db.Class.destroy({
                where: {id: req.body.id}
            }).then(function (rowaffected) {
                db.Note.destroy({
                    where: {TestId: null}
                }).then(function (rowaffected) {
                    return res.status(200).json({success: true});
                }).catch(function (err) {
                    return res.status(400).json({success: false, err: err});
                });
            }).catch(function (err) {
                return res.status(400).json({success: false, err: err});
            });
        }).catch(function (err) {
            return res.status(400).json({success: false, err: err});
        });
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.editClass = function (req, res) {
    db.Class.find({where: {id: req.body.id}}).then(function (obj) {
        if (obj) {
            obj.abrev = req.body.abrev;
            obj.level = req.body.level;
            obj.DisciplineId = req.body.Discipline.id;
            obj.TeacherId = req.body.Teacher.id;

            obj.save().then(function (objSaved) {
                db.StudentClass.destroy({
                    where: {ClassId: objSaved.id}
                }).then(function (rowaffected) {
                    for (var x = 0; x < req.body.classStudent.length; x++)
                        req.body.classStudent[x] = {StudentId: req.body.classStudent[x], ClassId: req.body.id};

                    db.StudentClass.bulkCreate(req.body.classStudent).then(function (result) {
                        return res.status(200).json({success: true});
                    }).catch(function (err) {
                        console.log(err);
                        return res.status(400).json({success: false, err: err});
                    });
                }).catch(function (err) {
                    return res.status(400).json({success: false, err: err});
                });
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

exports.getClassStudents = function (req, res) {
    db.StudentClass.findAll({where: {ClassId: req.params.ClassId}}).then(function (data) {
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