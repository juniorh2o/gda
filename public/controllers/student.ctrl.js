angular.module('gdaApp').controller('StudentController', 
    ['$scope', '$controller', 'ngDialog',
        function ($scope, $controller, ngDialog) {

            $controller('GenericController', {scope: $scope});
            $scope.paginateUri = '/api/student/get';
            $scope.sort = 'id';
            $scope.order = 'desc';

            $scope.create = function () {
                $scope.dialog = ngDialog.open({
                    template: 'public/views/student_edit.view.html',
                    controller: 'StudentEditController',
                    scope: $scope,
                    resolve: {
                        student: function () {
                            return {
                                "id": null
                            };
                        }
                    }
                });
            };

            $scope.edit = function (obj) {
                $scope.dialog = ngDialog.open({
                    template: 'public/views/student_edit.view.html',
                    controller: 'StudentEditController',
                    scope: $scope,
                    resolve: {
                        student: function ($filter) {
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