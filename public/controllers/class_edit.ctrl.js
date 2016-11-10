angular.module('gdaApp').controller('ClassEditController',
    ['$scope', 'class', '$http', 'disciplineList', 'teacherList',
        function ($scope, classProv, $http, disciplineList, teacherList) {
            $scope.class = classProv;
            $scope.disciplineList = disciplineList.data.results;
            $scope.teacherList = teacherList.data.results;
            $scope.ola = 1;
            $scope.close = function () {
                $scope.dialog.close();
            };

            $scope.submit = function () {
                var url = $scope.class.id ? '/api/class/edit' : '/api/class/create';
                $http.post(url, $scope.class).success(function (res) {
                    $scope.onPageChanged();
                    $scope.dialog.close();
                }).error(function (err) {
                    console.error(err);
                    $scope.dialog.close();
                });
            };

            $scope.delete = function () {
                $http.post('/api/class/delete', $scope.class).success(function (res) {
                    $scope.onPageChanged();
                    $scope.dialog.close();
                }).error(function (err) {
                    console.error(err);
                    $scope.dialog.close();
                });
            };
        }
    ]
)
;