describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('potatoFlickrApp', 'mockedFlickrFeedModule'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, mockedFlickrFeed) {
    httpBackend = $httpBackend;
    $httpBackend.whenJSONP(/api.flickr.com\/services\/feeds\/photos_public.gne/).respond(mockedFlickrFeed);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should load data from the feed to the scope', function () {
    httpBackend.flush();
    expect(scope.feed.title).toBe('Recent Uploads tagged potato');
  });
});
