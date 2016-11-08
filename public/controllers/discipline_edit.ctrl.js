angular.module('gdaApp').controller('DisciplineEditController',
    ['$scope', 'discipline', '$http',
        function ($scope, discipline, $http) {
            $scope.discipline = discipline;

            $scope.close = function () {
                $scope.dialog.close();
            };

            $scope.submit = function () {
                var url = $scope.discipline.id ? '/api/discipline/edit' : '/api/discipline/create';
                $http.post(url, $scope.discipline).success(function (res) {
                    $scope.onPageChanged();
                    $scope.dialog.close();
                }).error(function (err) {
                    console.error(err);
                    $scope.dialog.close();
                });
            };

            $scope.delete = function () {
                $http.post('/api/discipline/delete', $scope.discipline).success(function (res) {
                    $scope.onPageChanged();
                    $scope.dialog.close();
                }).error(function (err) {
                    console.error(err);
                    $scope.dialog.close();
                });
            };
        }
    ]
);