angular.module('gdaApp').controller('MainController',
    ['$scope', '$http',
        function ($scope, $http) {
            $http.get('/api/graph/list').success(function (res) {
                $scope.graphList = res;
            }).error(function (err) {
                console.error(err);
            });

            $scope.selectedMenu = 'discipline';
            $scope.selectedOption = 0;

            $scope.options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 10,
                            min:0
                        }
                    }]
                }
            };

            function changeData(content) {
                $http.post('/api/graph/getData', content).success(function (res) {
                    console.log(res);
                    $scope.labels = res.labels;
                    $scope.data = res.data;
                }).error(function (err) {
                    console.error(err);
                });
            }

            $scope.changeSelectedOption = function (menu, option) {
                $scope.selectedMenu = menu;
                $scope.selectedOption = option;
                changeData({option: menu, id: option});
            };

            changeData({option: 'discipline', id: 0});
        }
    ]
);