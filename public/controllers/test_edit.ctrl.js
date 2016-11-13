angular.module('gdaApp').controller('TestEditController',
    ['$scope', 'test', '$http', 'classList', 'noteList',
        function ($scope, test, $http, classList, noteList) {
            $scope.test = test;
            $scope.classList = classList.data.results;
            if ($scope.noteList = noteList.data)
                $scope.noteList = noteList.data.results;
            else
                $scope.noteList = noteList;
            $scope.close = function () {
                $scope.dialog.close();
            };

            $scope.submit = function () {
                $scope.test.noteList = $scope.noteList;
                var url = $scope.test.id ? '/api/test/edit' : '/api/test/create';
                $http.post(url, $scope.test).success(function (res) {
                    $scope.onPageChanged();
                    $scope.dialog.close();
                }).error(function (err) {
                    console.error(err);
                    $scope.dialog.close();
                });
            };

            $scope.delete = function () {
                $http.post('/api/test/delete', $scope.test).success(function (res) {
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