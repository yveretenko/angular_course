(function() {
  'use strict';

  angular
    .module('angular')
    .controller('PostsController', PostsController);

  /** @ngInject */
  function PostsController($resource, AuthService){
    var vm=this;

    vm.user = AuthService.currentUser();
    var Post = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts');
    vm.posts = Post.query();
  }
})();
