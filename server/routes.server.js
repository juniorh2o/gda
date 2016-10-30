var classCtrl = require('./controllers/class.controller.server.js');
var disciplineCtrl = require('./controllers/discipline.controller.server.js');
var noteCtrl = require('./controllers/note.controller.server');
var studentCtrl = require('./controllers/student.controller.server.js');
var teacherCtrl = require('./controllers/teacher.controller.server');
var testCtrl = require('./controllers/test.controller.server.js');

exports.init = function (app) {
    app.get('/api/class/get', classCtrl.getClass);
    app.post('/api/class/create', classCtrl.createClass);
    app.post('/api/class/delete', classCtrl.deleteClass);
    app.post('/api/class/edit', classCtrl.editClass);


    app.get('/api/discipline/get', disciplineCtrl.getDiscipline);
    app.post('/api/discipline/create', disciplineCtrl.createDiscipline);
    app.post('/api/discipline/delete', disciplineCtrl.deleteDiscipline);
    app.post('/api/discipline/edit', disciplineCtrl.editDiscipline);

    app.get('/api/student/get', studentCtrl.getStudent);
    app.post('/api/student/create', studentCtrl.createStudent);
    app.post('/api/student/delete', studentCtrl.deleteStudent);
    app.post('/api/student/edit', studentCtrl.editStudent);

    app.get('/api/note/get', noteCtrl.getNote);
    app.post('/api/note/create', noteCtrl.createNote);
    app.post('/api/note/delete', noteCtrl.deleteNote);
    app.post('/api/note/edit', noteCtrl.editNote);

    app.get('/api/teacher/get', teacherCtrl.getTeacher);
    app.post('/api/teacher/create', teacherCtrl.createTeacher);
    app.post('/api/teacher/delete', teacherCtrl.deleteTeacher);
    app.post('/api/teacher/edit', teacherCtrl.editTeacher);

    app.get('/api/test/get', testCtrl.getTest);
    app.post('/api/test/create', testCtrl.createTest);
    app.post('/api/test/delete', testCtrl.deleteTest);
    app.post('/api/test/edit', testCtrl.editTest);
};