const   async   = require('async'),
        db      = require("./../connection"),
        raw     = true;

exports.getGraphList = function(req, res) {

    async.parallel({
        
        Discipline : function(asyncCallback) {

            return db.Discipline.findAll({ raw }).then(function(disciplines) { 
                return asyncCallback(null, disciplines);
            }).catch(function(err) {
                return asyncCallback(err); 
            });
        },

        Teacher : function(asyncCallback) {

            return db.Teacher.findAll({ raw }).then(function(teachers) { 
                return asyncCallback(null, teachers);
            }).catch(function(err) {
                return asyncCallback(err); 
            });
        },

        Student : function(asyncCallback) {

            return db.Student.findAll({ raw }).then(function(students) { 
                return asyncCallback(null, students);
            }).catch(function(err) {
                return asyncCallback(err); 
            });
        },

        Class : function(asyncCallback) {

            return db.Class.findAll({ raw }).then(function(classes) { 
                return asyncCallback(null, classes);
            }).catch(function(err) {
                return asyncCallback(err); 
            });
        },

        Test : function(asyncCallback) {

            return db.Test.findAll({ raw }).then(function(tests) { 
                return asyncCallback(null, tests);
            }).catch(function(err) {
                return asyncCallback(err); 
            });
        },

    }, function(errAsync, response) {

        if (errAsync) {

            return res.status(400).json({ success : false, err: errAsync });
        }

        return res.status(200).jsonp(response);
    });
};

exports.getGraphData = function (req, res) {
    var valueList = [];
    var fieldList = [];
    var query = '';
    var title = "";
    if (req.body.option == 'discipline') {
        title += "Disciplinas";
        if (req.body.id == 0) {
            query = `
            SELECT 
                d.name as label,
                AVG(note) AS amount
            FROM
                discipline d
            INNER JOIN
                class c ON d.id = c.DisciplineId
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
            GROUP BY d.id;
            `;
        } else {
            query = `
            SELECT 
                t.name as label,
                AVG(note) AS amount
            FROM
                discipline d
            INNER JOIN
                class c ON d.id = c.DisciplineId
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
            WHERE d.id = ${req.body.id}
            GROUP BY t.id;
            `;
        }
    }

    if (req.body.option == 'teacher') {
        title += "Professores";
        if (req.body.id == 0) {
            query = `
            SELECT 
                t.name as label,
                AVG(note) AS amount
            FROM
                discipline d
            INNER JOIN
                class c ON d.id = c.DisciplineId
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
            GROUP BY t.id;
            `;
        }
        else {
            query = `
            SELECT 
                c.abrev as label,
                AVG(note) AS amount
            FROM
                discipline d
            INNER JOIN
                class c ON d.id = c.DisciplineId
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
            WHERE t.id = ${req.body.id}
            GROUP BY c.id;
            `;
        }
    }

    if (req.body.option == 'student') {
        title += "Estudantes";
        if (req.body.id == 0) {
            query = `
            SELECT 
                s.name as label,
                AVG(note) AS amount
            FROM
                student s
            INNER JOIN
                note n ON s.id = n.StudentId
            GROUP BY s.id;
            `;
        }
        else {
            query = `
            SELECT 
                d.name as label,
                AVG(note) AS amount
            FROM
                discipline d
            INNER JOIN
                class c ON d.id = c.DisciplineId
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
			INNER JOIN student s ON s.id = n.StudentId
            WHERE s.id = ${req.body.id}
            GROUP BY d.id;
            `;
        }
    }

    if (req.body.option == 'class') {
        title += "Turmas";
        if (req.body.id == 0) {
            query = `
            SELECT 
                c.abrev as label,
                AVG(note) AS amount
			FROM
                class c
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
            GROUP BY c.id;
            `;
        }
        else {
            query = `
            SELECT 
                s.name as label,
                AVG(note) AS amount
			FROM
                class c
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
			INNER JOIN
				student s ON s.id = n.StudentId
			WHERE c.id = ${req.body.id}
            GROUP BY s.id;
            `;
        }
    }

    if (req.body.option == 'test') {
        title += "Avaliações";
        if (req.body.id == 0) {
            query = `
            SELECT 
                tes.name as label,
                AVG(note) AS amount
			FROM
                class c
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
            GROUP BY tes.id;
            `;
        }
        else {
            query = `
            SELECT 
                s.name as label,
                AVG(note) AS amount
			FROM
                class c
            INNER JOIN
                teacher t ON t.id = c.TeacherId
            INNER JOIN
                test tes ON c.id = tes.ClassId
            INNER JOIN
                note n ON tes.id = n.TestId
			INNER JOIN
				student s ON s.id = n.StudentId
			WHERE tes.id = ${req.body.id}
            GROUP BY s.id;
            `;
        }
    }

    db.conn.query(query).then(function (queryRes) {
        for (var x = 0; x < queryRes[0].length; x++) {
            console.log(queryRes[0][x]);
            fieldList.push(queryRes[0][x].label);
            valueList.push(queryRes[0][x].amount);
        }
        res.status(200).json({labels: fieldList, data: valueList, title: title});

    }).catch(function (err) {
        return res.status(400).json({success: false, err: err});
    });
};