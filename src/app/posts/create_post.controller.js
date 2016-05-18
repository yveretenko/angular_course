(function() {
  'use strict';

  angular
    .module('angular')
    .controller('CreatePostController', CreatePostController);

  /** @ngInject */
  function CreatePostController($resource, AuthService, $http, $base64, $location){
    var vm=this;

    vm.statuses = ['draft', 'publish', 'future', 'pending', 'private'];

    vm.post={};
    vm.post.status = vm.statuses[1];

    vm.save = function(){
      $http({
          method: 'POST',
          url: 'http://angular.codeforges.com/api/wp-json/wp/v2/posts',
          data: vm.post,
          headers: {
              Authorization: AuthService.currentUser().credentials
          }
      }).then(function successCallback() {
          $location.path("/");
      });
    };
  }
})();