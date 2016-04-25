App.controller('MainController', function($scope, $location, AuthService){
    if (!AuthService.isLoggedIn())
        $location.path("/login");
    else
    {
        var userInfo=AuthService.currentUser().data;

        $scope.currentUsername=userInfo.name;
        $scope.avatar=userInfo.avatar_urls[24];
    }

    $scope.showBar=AuthService.isLoggedIn();

    $scope.logout = function(){
        AuthService.logout();

        $location.path("/login");
    };
});
