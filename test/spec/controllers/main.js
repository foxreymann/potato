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

    //inject $rootScope
    inject(function ($rootScope) {
      //instead don't create a child scope and keep a reference to the actual rootScope
      rootScope = $rootScope;
    })
  }));

  it('should load data from the feed to the scope', function () {
    httpBackend.flush();
    expect(scope.feed.title).toBe('Recent Uploads tagged potato');
    expect(scope.feed.items.length).toBe(3);
    expect(scope.feed.items[0].title).toBe('Happy Thanksgiving 7');
  });

  it('should put feed into rootScope in showPost function', function () {
    httpBackend.flush();
    scope.showPost(scope.feed.items[0]);
    expect(rootScope.post).toBe(scope.feed.items[0]);
  });
});
