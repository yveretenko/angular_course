(function() {
  'use strict';

  angular
    .module('angular')
    .controller('EditPostController', EditPostController);

  /** @ngInject */
  function EditPostController($resource, AuthService, $http, $base64, $window, $routeParams, $location){
    var vm=this;

    vm.statuses = ['draft', 'publish', 'future', 'pending', 'private'];

    var Post = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id');
    vm.post = Post.get({id: $routeParams.id}, function(res){
        vm.post = res;
        vm.post.status = vm.statuses[1];
        vm.post.title = vm.post.title.rendered;
        vm.post.content = vm.post.content.rendered;
    });

    vm.save = function(){
        vm.post.status=vm.post.status.value;

        $http({
            method: 'POST',
            url: 'http://angular.codeforges.com/api/wp-json/wp/v2/posts/'+$routeParams.id,
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