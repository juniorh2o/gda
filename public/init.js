var gdaApp = angular.module('gdaApp', ['ui.router', 'ngDialog'])
    .config(['$locationProvider', 'ngDialogProvider',
        function ($locationProvider, ngDialogProvider) {
            $locationProvider.html5Mode(true);

            ngDialogProvider.setDefaults({
                closeByEscape: true,
                showClose: false,
                closeByNavigation: true
            });
        }
    ]).config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('home', {
                    url: "/",
                    views: {
                        "header": {
                            templateUrl: 'public/views/header.html'
                        },
                        "content": {
                            templateUrl: 'public/views/main_content.html',
                            controller: 'MainController'
                        }
                    }
                })
        }
    ]);