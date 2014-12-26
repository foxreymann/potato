describe('Controller: PostCtrl', function () {

  // load the controller's module
  beforeEach(module('potatoFlickrApp', 'mockedFlickrFeedModule'));

  var PostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    rootScope = $rootScope;

    PostCtrl = $controller('PostCtrl', {
      $scope: scope
    });

  }));

  it('should redirect to / if post data is not available in rootScope', function () {
    inject(function($location) {
      expect($location.path()).toBe('/');
    });
  });
});
