angular.module('gdaApp').controller('ClassController',
    ['$scope', '$controller', 'ngDialog',
        function ($scope, $controller, ngDialog) {

            $controller('GenericController', {scope: $scope});
            $scope.paginateUri = '/api/class/get';
            $scope.sort = 'id';
            $scope.order = 'desc';

            $scope.create = function () {
                $scope.dialog = ngDialog.open({
                    template: 'public/views/class_edit.view.html',
                    controller: 'ClassEditController',
                    scope: $scope,
                    resolve: {
                        class: function () {
                            return {
                                "id": null
                            };
                        },
                        disciplineList: function ($http) {
                            return $http.get('/api/discipline/getAll');
                        },
                        teacherList: function ($http) {
                            return $http.get('/api/teacher/getAll');
                        }
                    }
                });
            };

            $scope.edit = function (obj) {
                $scope.dialog = ngDialog.open({
                    template: 'public/views/class_edit.view.html',
                    controller: 'ClassEditController',
                    scope: $scope,
                    resolve: {
                        class: function ($filter) {
                            //return $filter('getByProperty')('id', obj.id, $scope.gridResults);
                            return obj;
                        },
                        disciplineList: function ($http) {
                            return $http.get('/api/discipline/getAll');
                        },
                        teacherList: function ($http) {
                            return $http.get('/api/teacher/getAll');
                        }
                    }
                });
            };

            $scope.onPageChanged();
        }
    ]
);