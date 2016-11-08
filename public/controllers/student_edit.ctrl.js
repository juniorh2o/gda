angular.module('gdaApp').controller('StudentEditController',
    ['$scope', 'student', '$http',
        function ($scope, student, $http) {
            $scope.student = student;

            $scope.close = function () {
                $scope.dialog.close();
            };

            $scope.submit = function () {
                var url = $scope.student.id ? '/api/student/edit' : '/api/student/create';
                $http.post(url, $scope.student).success(function (res) {
                    $scope.onPageChanged();
                    $scope.dialog.close();
                }).error(function (err) {
                    console.error(err);
                    $scope.dialog.close();
                });
            };

            $scope.delete = function () {
                $http.post('/api/student/delete', $scope.student).success(function (res) {
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