angular.module('angular').factory('AuthService', AuthService);

function AuthService($window){
    var currentUser;

    return {
        fetchUser: function(){
            if ($window.sessionStorage.user)
            {
                currentUser=angular.fromJson($window.sessionStorage.user);
            }
        },
        login: function(user, credentials){
            currentUser=user.body;
            currentUser.credentials=credentials;
            $window.sessionStorage.setItem('user', angular.toJson(currentUser));
        },
        logout: function(){
            currentUser=null;
            $window.sessionStorage.user=null;
        },
        isLoggedIn: function(){
            return currentUser!=null
        },
        currentUser: function(){
            return currentUser;
        }
    };
}