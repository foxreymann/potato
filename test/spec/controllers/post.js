describe('Controller: PostCtrl', function () {

  // load the controller's module
  beforeEach(module('potatoFlickrApp', 'mockedFlickrFeedModule'));

  var PostCtrl,
    scope;

  // Initialize the controller and a mock scope

  var customBeforeEach = function(setPostData) {
    inject(function ($controller, $rootScope) {
      if(setPostData) {
        $rootScope.post = {
          "title": "Happy Thanksgiving 7",
          "link": "https://www.flickr.com/photos/wanderingchopsticks/15917835378/",
          "media": {"m":"https://farm9.staticflickr.com/8634/15917835378_261f4a64ab_m.jpg"},
          "date_taken": "2014-11-29T16:23:36-08:00",
          "description": " <p><a href=\"https://www.flickr.com/people/wanderingchopsticks/\">wanderingchopsticks<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/wanderingchopsticks/15917835378/\" title=\"Happy Thanksgiving 7\"><img src=\"https://farm9.staticflickr.com/8634/15917835378_261f4a64ab_m.jpg\" width=\"240\" height=\"160\" alt=\"Happy Thanksgiving 7\" /><\/a><\/p> ",
          "published": "2014-12-25T20:40:14Z",
          "author": "nobody@flickr.com (wanderingchopsticks)",
          "author_id": "14741714@N00",
          "tags": "thanksgiving pie purple sweet potato okinawan wanderingchopsticks"
        };
      }

      rootScope = $rootScope;

      scope = $rootScope.$new();

      PostCtrl = $controller('PostCtrl', {
        $scope: scope
      });
    });
  };

  it('should redirect to / if post data is not available in rootScope', function () {
    customBeforeEach(setPostData = false);
    inject(function($location) {
      expect($location.path()).toBe('/');
    });
  });

  it('should copy post data from rootScope to scope', function () {
    customBeforeEach(setPostData = true);
    expect(scope.post.title).toBe('Happy Thanksgiving 7');
    expect(scope.post).toBe(rootScope.post);
  });
});
