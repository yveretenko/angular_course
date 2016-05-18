(function() {
  'use strict';

  angular
    .module('angular')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($routeParams, $location, $filter, $base64, $http, AuthService)
  {
      var vm=this;

      vm.user=AuthService.currentUser();

      vm.login=function(){
          $http({
              method: "GET",
              url: 'http://angular.codeforges.com/api/wp-json/wp/v2/users/me?_envelope',
              headers: {
                  Authorization: 'Basic '+$base64.encode(vm.userName+':'+vm.password)
              }
          }).then(function (response){
              if (response.data.status==302)
              {
                  AuthService.login(response.data, 'Basic '+$base64.encode(vm.userName+':'+vm.password));
                  $location.path("/");
              }
          });
      }
  }
})();
