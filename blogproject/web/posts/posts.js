angular.module( 'polymerblog.posts', [
	'auth0',
	'pascalprecht.translate'
])
.config(function ($translateProvider) {
  $translateProvider.translations('pt-br', {
    posts: {
      viewPosts: 'Vendo posts como'
    }
  });

  $translateProvider.translations('en', {
    posts: {
      viewPosts: 'Viewing posts as'
    }
  });
})
.controller( 'PostsCtrl', function PostsController( $scope, auth, $http, $location, store ) {
  $scope.auth = auth;

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/login');
  }
});
