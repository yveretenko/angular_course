App.controller('LoginController', function ($scope, $routeParams, $location, $filter, $base64, $http, AuthService)
{
    $scope.user=AuthService.currentUser();

    $scope.login=function(){
        $http({
            method: "GET",
            url: 'http://angular.codeforges.com/api/wp-json/wp/v2/users/me?_envelope',
            headers: {
                Authorization: 'Basic '+$base64.encode($scope.userName+':'+$scope.password)
            }
        }).then(function (response, status){
            if (response.data.status==302)
            {
                AuthService.login(response.data, 'Basic '+$base64.encode($scope.userName+':'+$scope.password));
                $location.path("/");
            }
        });
    }
});