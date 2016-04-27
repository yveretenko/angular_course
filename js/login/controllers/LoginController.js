App.controller('LoginController', function($scope, AuthService){
    $scope.login = function(){
        AuthService.login($scope.username, $scope.password);
    };
});
