App.controller('IndexController',function($scope, $resource, AuthService){
  $scope.user = AuthService.currentUser();
  var Post = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts');
  $scope.posts = Post.query();
});
