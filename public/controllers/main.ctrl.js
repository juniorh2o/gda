angular.module('gdaApp').controller('MainController',
    ['$scope', 'graphList',
        function ($scope, graphList) {
            $scope.graphList = graphList.data;
        }
    ]
);