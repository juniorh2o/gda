angular.module('gdaApp').controller('GenericController', ['scope', '$http', function ($scope, $http) {

    $scope.totalItems = 1;
    $scope.currentPage = 1;
    $scope.maxSize = 1;
    $scope.numPagesToShow = 5;
    $scope.lockPagination = true;
    $scope.sort = "id";
    $scope.order = "desc";
    $scope.filter = "";
    $scope.lastFilterUsed = undefined;
    $scope.paginateUri = undefined;

    function updateLastUsedFilter(reset) {
        $scope.lastFilterUsed = reset ? undefined : $scope.filter;
    }

    function onPaginationSuccess(response) {
        var data = response.data;
        $scope.gridResults = data.results;
        $scope.maxSize = data.maxResults;
        $scope.totalItems = data.total;
        $scope.lockPagination = false;
    }

    function onPaginationError(error) {
        console.log(error);
        $scope.lockPagination = false;
    }

    function paginate() {
        $scope.lockPagination = true;

        $http.get($scope.paginateUri, {
            params: {
                page: $scope.currentPage,
                order: $scope.order,
                sort: $scope.sort,
                filter: $scope.filter
            }
        }).then(onPaginationSuccess, onPaginationError);
    }

    $scope.onPageChanged = function () {
        paginate();
    };

    $scope.setSort = function (sort) {
        if (sort == $scope.sort) {
            $scope.order = $scope.order == 'asc' ? 'desc' : 'asc'
        } else {
            $scope.order = 'asc';
            $scope.sort = sort;
        }
        paginate();
    };

    $scope.doFilter = function () {
        if ($scope.lastFilterUsed != $scope.filter
            && $scope.filter != '') {
            updateLastUsedFilter();
            paginate();
        } else if ($scope.filter == '') {
            $scope.clearFilter();
        }
    };

    $scope.clearFilter = function () {
        if ($scope.lastFilterUsed != undefined) {
            updateLastUsedFilter(true);
            $scope.filter = "";
            paginate();
        }
    };

    $scope.manageFilterAction = function (event) {
        if (event.which == 13) {
            $scope.doFilter();
        }
    };

    angular.extend(this, $scope);
}]);