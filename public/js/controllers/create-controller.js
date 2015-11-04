angular.module('gistApp')
  .controller('createController', [
    '$scope',
    '$cookies',
    'GistService',
    '$window',
    ($scope, $cookies, GistService, $window, authorized) => {
      var userCookie = $cookies.get('access_token');
      if (userCookie) {
        $scope.gists = [];
        GistService.getGists(userCookie)
          .success((gists) => {
            $scope.gists = gists;
          });
      } else {
        $window.location.href = '/#/login';
      }
    }
  ]);