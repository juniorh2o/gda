angular.module('gdaApp').controller('DisciplineController',
    ['$scope', '$controller',
        function ($scope, $controller) {

            $controller('GenericController', {scope: $scope});
            $scope.paginateUri = '/api/discipline/get';
            $scope.sort = 'id';
            $scope.order = 'asc';

            $scope.create = function () {
                alert("ngDialog");
            };

            $scope.edit = function () {
                alert("ngDialog");
            };

            $scope.onPageChanged();
        }
    ]
);