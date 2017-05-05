var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

app.directive("w3TestDirective", function() {
    return {
        template : "I was made in a directive constructor!"
    };
});

app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "/api/session/create/stefan"
    }).then(function mySucces(response) {
        $scope.firstName = response.data.sessionid;
    }, function myError(response) {
        $scope.firstName = response.statusText;
    });
});
