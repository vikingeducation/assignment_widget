var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl', ['$scope', '_', function($scope, _) {
  $scope.reverse = true;

  $scope.restaurants = [];
  $scope.onClick = function(form){
    var obj = {};
    obj['name'] = $scope.name;
    obj['foodType'] = $scope.foodType;
    obj['webAddress'] = $scope.webAddress;
    $scope.restaurants.push(obj);
    $scope.name = '';
    $scope.foodType = '';
    $scope.webAddress = '';
    console.log(obj);
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };

}]);


widgets.controller('PhotosCtrl', ['$scope', '_', function($scope, _) {

  $scope.rawFeed = instagramResponse;
  $scope.pictures = []
  for (var i = 0; i < $scope.rawFeed.data.length; i++) {
    var picture = {};
    picture['url'] = $scope.rawFeed.data[i].images.thumbnail.url;
    $scope.pictures.push(picture);
  }

}]);


// adding lodash
widgets.factory('_', ['$window', function($window) {
  return $window._;
}]);
