angular.module('gdaApp', ['ui.router', 'ngDialog','ui.bootstrap'])
    .config(['$locationProvider', 'ngDialogProvider', '$stateProvider',
        function ($locationProvider, ngDialogProvider, $stateProvider) {
            $locationProvider.html5Mode(true);

            ngDialogProvider.setDefaults({
                closeByEscape: true,
                showClose: false,
                closeByNavigation: true
            });

            $stateProvider
                .state({
                    name: "home",
                    url: "/",
                    views: {
                        "header": {
                            templateUrl: 'public/views/header.view.html',
                            controller: 'HeaderController'
                        },
                        "content": {
                            templateUrl: 'public/views/content.view.html'
                        },
                        "title@home": {
                            template: "Estatísticas"
                        },
                        "data@home": {
                            templateUrl: 'public/views/main.view.html',
                            controller: 'MainController'
                        }
                    }
                }).state({
                name: "home.class",
                url: "turmas",
                views: {
                    "header": {
                        templateUrl: 'public/views/header.view.html',
                        controller: 'HeaderController'
                    },
                    "content": {
                        templateUrl: 'public/views/content.view.html'
                    },
                    "title@home": {
                        template: "Classes"
                    },
                    "data@home": {
                        templateUrl: 'public/views/class.view.html',
                        controller: 'ClassController'
                    }
                }
            }).state({
                name: "home.discipline",
                url: "disciplinas",
                views: {
                    "header": {
                        templateUrl: 'public/views/header.view.html',
                        controller: 'HeaderController'
                    },
                    "content": {
                        templateUrl: 'public/views/content.view.html'
                    },
                    "title@home": {
                        template: "Disciplinas"
                    },
                    "data@home": {
                        templateUrl: 'public/views/discipline.view.html',
                        controller: 'DisciplineController'
                    }
                }
            }).state({
                name: "home.note",
                url: "notas",
                views: {
                    "header": {
                        templateUrl: 'public/views/header.view.html',
                        controller: 'HeaderController'
                    },
                    "content": {
                        templateUrl: 'public/views/content.view.html'
                    },
                    "title@home": {
                        template: "Notas"
                    },
                    "data@home": {
                        templateUrl: 'public/views/note.view.html',
                        controller: 'NoteController'
                    }
                }
            }).state({
                name: "home.student",
                url: "estudantes",
                views: {
                    "header": {
                        templateUrl: 'public/views/header.view.html',
                        controller: 'HeaderController'
                    },
                    "content": {
                        templateUrl: 'public/views/student.view.html'
                    },
                    "title@home": {
                        template: "Estudantes"
                    },
                    "data@home": {
                        templateUrl: 'public/views/student.view.html',
                        controller: 'StudentController'
                    }
                }
            }).state({
                name: "home.teacher",
                url: "professores",
                views: {
                    "header": {
                        templateUrl: 'public/views/header.view.html',
                        controller: 'HeaderController'
                    },
                    "content": {
                        templateUrl: 'public/views/content.view.html'
                    },
                    "title@home": {
                        template: "Professores"
                    },
                    "data@home": {
                        templateUrl: 'public/views/teacher.view.html',
                        controller: 'TeacherController'
                    }
                }
            }).state({
                name: "home.test",
                url: "avaliacoes",
                views: {
                    "header": {
                        templateUrl: 'public/views/header.view.html',
                        controller: 'HeaderController'
                    },
                    "content": {
                        templateUrl: 'public/views/content.view.html'
                    },
                    "title@home": {
                        template: "Avaliações"
                    },
                    "data@home": {
                        templateUrl: 'public/views/test.view.html',
                        controller: 'TestController'
                    }
                }
            });
        }
    ]);