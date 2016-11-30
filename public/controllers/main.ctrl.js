angular.module('gdaApp').controller('MainController',
    ['$scope', '$http',
        function ($scope, $http) {
            $scope.title = "";

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
                            min: 0
                        }
                    }]
                },
                tooltips : {
                    callbacks : {
                        label : function(tooltipItems) {

                            return 'Média: ' + parseFloat(Math.round(tooltipItems.yLabel * 100) / 100).toFixed(2);
                        }
                    }
                }
            };

            function changeData(content, appendText) {
                $http.post('/api/graph/getData', content).success(function (res) {
                     
                    $scope.labels   = res.labels;
                    $scope.data     = res.data;
                    $scope.title    = res.title;

                    if (appendText != "")
                        $scope.title += " > " + appendText;
                }).error(function (err) {
                    console.error(err);
                });
            }

            $scope.changeSelectedOption = function (menu, option) {
                $scope.selectedMenu = menu;
                $scope.selectedOption = option.id;

                var appendText = "";

                if ($scope.selectedOption != 0)
                    appendText = option.name || option.abrev;

                changeData({option: menu, id: option.id}, appendText);
            };

            changeData({option: 'discipline', id: 0}, "");
        }
    ]
);