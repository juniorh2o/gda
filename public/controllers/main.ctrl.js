angular.module('gdaApp').controller('MainController',
    ['$scope', 'graphList',
        function ($scope, graphList) {
            $scope.graphList = graphList.data;

            $scope.selectedMenu = 'discipline';
            $scope.selectedOption = 0;

            $scope.changeSelectedOption = function (menu, option) {
                $scope.selectedMenu = menu;
                $scope.selectedOption = option;
            }

        }
    ]
);