angular.module('gdaApp').controller('ClassEditController',
    ['$scope', 'class', '$http', 'disciplineList', 'teacherList', 'studentList', 'classStudentList',
        function ($scope, classProv, $http, disciplineList, teacherList, studentList, classStudentList) {
            $scope.class = classProv;
            $scope.disciplineList = disciplineList.data.results;
            $scope.teacherList = teacherList.data.results;
            $scope.studentList = studentList.data.results;

            if (classStudentList.data) {
                $scope.class.classStudent = classStudentList.data.results;
                angular.forEach($scope.studentList, function (student, i) {
                    angular.forEach($scope.class.classStudent, function (classStudent, i) {
                        if (classStudent.StudentId == student.id)
                            student.selected = true;
                    });
                });
            }
            $scope.close = function () {
                $scope.dialog.close();
            };

            $scope.submit = function () {
                $scope.class.classStudent = [];

                angular.forEach($scope.studentList, function (student, i) {
                    if (student.selected)
                        $scope.class.classStudent.push(student.id);
                });
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