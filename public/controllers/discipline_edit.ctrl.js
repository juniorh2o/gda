angular.module('gdaApp').controller('DisciplineEditController',
    ['$scope', 'discipline',
        function ($scope, discipline) {
            console.log(discipline);

            $scope.close = function(){
                $scope.dialog.close();
            }
        }
    ]
);