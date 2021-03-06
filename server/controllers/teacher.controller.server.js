var db = require("./../connection");

exports.getTeacherAll = function (req, res) {
    var queryObj = {
        raw: true
    };

    db.Teacher.findAll(queryObj).then(function (data) {
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

exports.getTeacher = function (req, res) {
    var params = req.query;
    var maxResults = 10;
    var offset = params.page ? --params.page * maxResults : 0;
    var sort = params.sort ? params.sort : 'id';
    var order = params.order ? params.order : 'desc';

    var queryObj = {
        limit: maxResults,
        offset: offset,
        order: sort + " " + order + ', name asc',
        raw: true
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

    db.Teacher.findAndCountAll(queryObj).then(function (data) {
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
        return res.status(400).json({success: false, err: err});
    });
};

exports.createTeacher = function (req, res) {
    db.Teacher.create({name: req.body.name}).then(function (obj) {
        if (obj)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteTeacher = function (req, res) {
    db.Teacher.destroy({
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

exports.editTeacher = function (req, res) {
    db.Teacher.find({where: {id: req.body.id}}).then(function (obj) {
        if (obj) {
            obj.name = req.body.name;
            obj.DisciplineId = req.body.DisciplineId;

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