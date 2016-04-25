App.factory('AuthService', function($resource, $http, $base64, $location){
    var currentUser;

    return {
        login: function(login, pass){
            var usersResource = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/users');

            // find user id in Users array by name
            usersResource.query({}, function(result){
                // couldn't find a way to search, sending search params to resource :(
                var userId;
                angular.forEach(result, function(value, key) {
                    if (login===value.name)
                        userId=value.id;
                });

                if (userId)
                {
                    // use this id to fetch info from /wp/v2/users/<id>
                    $http.defaults.headers.common['Authorization']='Basic '+$base64.encode(login+':'+pass);

                    $http({
                        method: 'POST',
                        url: 'http://angular.codeforges.com/api/wp-json/wp/v2/users/'+userId
                    }).then(function successCallback(response){
                        // on success store the userData in the service. And redirect to homepage
                        currentUser=response;

                        $location.path("/");
                    }, function errorCallback(response){
                    });
                }
            });
        },
        logout: function(){
            currentUser=undefined;
        },
        isLoggedIn: function(){
            return typeof currentUser !== 'undefined';
        },
        currentUser: function(){
            return currentUser;
        }
    };
});

App.controller('LoginController', function($scope, AuthService, $location){
    $scope.login = function(){
        AuthService.login($scope.username, $scope.password);
    };
});
