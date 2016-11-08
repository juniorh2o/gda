angular.module('gdaApp').controller('TeacherController',
    ['$scope', '$controller', 'ngDialog',
        function ($scope, $controller, ngDialog) {

            $controller('GenericController', {scope: $scope});
            $scope.paginateUri = '/api/teacher/get';
            $scope.sort = 'id';
            $scope.order = 'desc';

            $scope.create = function () {
                $scope.dialog = ngDialog.open({
                    template: 'public/views/teacher_edit.view.html',
                    controller: 'TeacherEditController',
                    scope: $scope,
                    resolve: {
                        teacher: function () {
                            return {
                                "id": null
                            };
                        }
                    }
                });
            };

            $scope.edit = function (obj) {
                $scope.dialog = ngDialog.open({
                    template: 'public/views/teacher_edit.view.html',
                    controller: 'TeacherEditController',
                    scope: $scope,
                    resolve: {
                        teacher: function ($filter) {
                            //return $filter('getByProperty')('id', obj.id, $scope.gridResults);
                            return obj;
                        }
                    }
                });
            };

            $scope.onPageChanged();
        }
    ]
);