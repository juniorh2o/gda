angular.module('gdaApp').controller('TestController',
    ['$scope', '$controller', 'ngDialog',
        function ($scope, $controller, ngDialog) {

            $controller('GenericController', {scope: $scope});
            $scope.paginateUri = '/api/test/get';
            $scope.sort = 'id';
            $scope.order = 'desc';

            $scope.create = function () {
                $scope.dialog = ngDialog.open({
                    template: 'public/views/test_edit.view.html',
                    controller: 'TestEditController',
                    scope: $scope,
                    resolve: {
                        test: function () {
                            return {
                                "id": null
                            };
                        }
                    }
                });
            };

            $scope.edit = function (obj) {
                $scope.dialog = ngDialog.open({
                    template: 'public/views/test_edit.view.html',
                    controller: 'TestEditController',
                    scope: $scope,
                    resolve: {
                        test: function ($filter) {
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