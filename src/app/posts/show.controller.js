(function() {
  'use strict';

  angular
    .module('angular')
    .controller('ShowController', ShowController);

  /** @ngInject */
  function ShowController($resource, $routeParams, AuthService){
    var vm=this;

    vm.user = AuthService.currentUser();
    var Post = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id');
    vm.post = Post.get({id: $routeParams.id});
  }
})();