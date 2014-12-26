describe('Controller: PostsListCtrl', function () {

  // load the controller's module
  beforeEach(module('potatoFlickrApp', 'mockedFlickrFeedModule'));

  var PostsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, mockedFlickrFeed) {

    httpBackend = $httpBackend;
    $httpBackend.whenJSONP(/api.flickr.com\/services\/feeds\/photos_public.gne/).respond(mockedFlickrFeed);

    scope = $rootScope.$new();

    rootScope = $rootScope;

    PostsListCtrl = $controller('PostsListCtrl', {
      $scope: scope
    });

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

  it('should redirect to /post in showPost function', function () {
    httpBackend.flush();
    inject(function($location) {
      scope.showPost(scope.feed.items[0]);
      expect($location.path()).toBe('/post');
    });
  });
});
