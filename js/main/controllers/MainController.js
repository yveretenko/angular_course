App.controller('MainController', function($scope, $location, AuthService, isLoggedIn){
    if (!isLoggedIn)
        $location.path("/login");
    else
        $scope.currentUser=AuthService.currentUser().data;

    $scope.showBar=isLoggedIn;

    $scope.logout = function(){
        AuthService.logout();

        $location.path("/login");
    };
});