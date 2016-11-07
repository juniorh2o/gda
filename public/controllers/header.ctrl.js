angular.module('gdaApp').controller('HeaderController', ['$scope', '$state', function ($scope, $state) {
    $scope.currentState = $state.current;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $scope.currentState = toState;
        }
    );
}]);