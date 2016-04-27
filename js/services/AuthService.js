App.factory('AuthService', function($resource, $http, $base64, $location){
    var currentUser=null;

    return {
        login: function(login, pass){
            var usersResource = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/users');

            // find user id in Users array by name
            usersResource.query({}, function(result){
                // couldn't find a way to search, sending search params to resource :(
                var userId;
                result.forEach(function(value) {
                    if (login===value.name)
                        userId=value.id;
                });

                if (userId) {
                    // use this id to fetch info from /wp/v2/users/<id>
                    $http({
                        method: 'POST',
                        headers: {
                            'Authorization': 'Basic '+$base64.encode(login+':'+pass)
                        },
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
            currentUser=null;
        },
        isLoggedIn: function(){
            return currentUser!==null;
        },
        currentUser: function(){
            return currentUser;
        }
    };
});