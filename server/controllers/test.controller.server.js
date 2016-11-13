var db = require("./../connection");

exports.getTestAll = function (req, res) {
    var queryObj = {
        raw: true
    };

    db.Test.findAll(queryObj).then(function (data) {
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

exports.getTest = function (req, res) {
    var params = req.query;
    var maxResults = 10;
    var offset = params.page ? --params.page * maxResults : 0;
    var sort = params.sort ? params.sort : 'id';
    var order = params.order ? params.order : 'desc';

    var queryObj = {
        limit: maxResults,
        offset: offset,
        order: sort + " " + order + ', name asc',
        include: [db.Class]
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

    db.Test.findAndCountAll(queryObj).then(function (data) {
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

exports.createTest = function (req, res) {
    console.log(req.body.Class);
    console.log(req.body.ClassId);
    db.Test.create({
        name: req.body.name,
        ClassId: req.body.Class.id
    }).then(function (obj) {
        if (obj)
            return res.status(200).json({success: true});
        else
            return res.status(400).json({success: false, err: "no object created"});
    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};

exports.deleteTest = function (req, res) {
    db.Test.destroy({
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

exports.editTest = function (req, res) {
    db.Test.find({where: {id: req.body.id}}).then(function (obj) {
        if (obj) {
            obj.name = req.body.name;
            obj.TeacherId = req.body.TeacherId;
            obj.ClassId = req.body.ClassId;

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