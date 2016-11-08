angular.module('gdaApp').controller('TeacherEditController',
    ['$scope', 'teacher', '$http',
        function ($scope, teacher, $http) {
            $scope.teacher = teacher;

            $scope.close = function () {
                $scope.dialog.close();
            };

            $scope.submit = function () {
                var url = $scope.teacher.id ? '/api/teacher/edit' : '/api/teacher/create';
                $http.post(url, $scope.teacher).success(function (res) {
                    $scope.onPageChanged();
                    $scope.dialog.close();
                }).error(function (err) {
                    console.error(err);
                    $scope.dialog.close();
                });
            };

            $scope.delete = function () {
                $http.post('/api/teacher/delete', $scope.teacher).success(function (res) {
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